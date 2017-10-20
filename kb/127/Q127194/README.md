---
layout: page
title: "Q127194: FIX: CMap Template Class Leaks Non-Primitive KEY Objects"
permalink: /kb/127/Q127194/
---

## Q127194: FIX: CMap Template Class Leaks Non-Primitive KEY Objects

{% raw %}

	Article: Q127194
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbtemplate kbMFC kbVC200 kbVC200fix kbGrpDSMFCATL kbCollectionClass
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the CMap template class, users may notice a memory leak when using
	non-primitive objects as KEY values (for example, CString).
	
	CAUSE
	=====
	
	The CMap class does not call the destructor for its KEYs when it does a
	RemoveAll().
	
	RESOLUTION
	==========
	
	Because the CMap class is implemented in AFXTEMPL.H, users can add a single line
	to the CMap::RemoveAll() member function in this file to correct this problem.
	The new line is marked with a //NOTE: in the following code:
	
	  template<class KEY, class ARG_KEY, class VALUE, class ARG_VALUE>
	  void CMap<KEY, ARG_KEY, VALUE, ARG_VALUE>::RemoveAll()
	  {
	      ASSERT_VALID(this);
	
	      if (m_pHashTable != NULL)
	      {
	          // destroy elements (values and keys)
	          for (UINT nHash = 0; nHash < m_nHashTableSize; nHash++)
	          {
	              CAssoc* pAssoc;
	              for (pAssoc = m_pHashTable[nHash]; pAssoc != NULL;
	                pAssoc = pAssoc->pNext)
	              {
	                  DestructElements(&pAssoc->value, 1);
	
	                  //NOTE: Additional call to destruct the keys!
	                  DestructElements(&pAssoc->key, 1);
	              }
	          }
	      }
	
	      // free hash table
	      delete[] m_pHashTable;
	      m_pHashTable = NULL;
	
	      m_nCount = 0;
	      m_pFreeList = NULL;
	      m_pBlocks->FreeDataChain();
	      m_pBlocks = NULL;
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the Microsoft
	Foundation Classes version 3.1 included with Microsoft Visual C++, 32-bit
	Edition, version 2.1.
	
	Additional query words: CString CMap 3.00 KEY 2.00
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbtemplate kbMFC kbVC200 kbVC200fix kbGrpDSMFCATL kbCollectionClass kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
