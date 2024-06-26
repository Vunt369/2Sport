﻿using System.Linq.Expressions;

namespace _2Sport_BE.Repository.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable<T> Get(
           Expression<Func<T, bool>> filter = null,
           Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
           string includeProperties = "",
           int? pageIndex = null,
           int? pageSize = null);

        int Count(Expression<Func<T, bool>> filter = null);
        IQueryable<T> GetAll(params Expression<Func<T, object>>[] includes);
        T GetByID(object id);

        void Insert(T entity);

        void Delete(object id);

        void Delete(T entityToDelete);

        void Update(T entityToUpdate);
    }
}
