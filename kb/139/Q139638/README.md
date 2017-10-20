---
layout: page
title: "Q139638: HOWTO: Overload New to Reduce Memory Fragmentation"
permalink: /kb/139/Q139638/
---

## Q139638: HOWTO: Overload New to Reduce Memory Fragmentation

{% raw %}

	Article: Q139638
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,2.2,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbLangCPP kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Providing a dedicated heap by overloading new and delete for a class can
	significantly reduce memory fragmentation. Any class that is frequently
	instantiated using new is a candidate for providing a dedicated heap.
	
	This method works best when many instances of a class are used in close time
	proximity but random order. For example, this method will work well for a newly
	created list that is about to be sorted.
	
	This method impairs performance where the use of instances of the class is more
	time proximate to the use of other heap-allocated objects. For example, this
	method would impair the performance of a scrolling, in-memory view of rows read
	from a database.
	
	There is no easy substitute for careful analysis of locality of reference, where
	locality is gauged according to the page size used by the host operating
	system's virtual memory management and time separation.
	
	This technique should not be applied to a base class that can be or might be
	derived from if data is to be added to the derived class.
	
	MORE INFORMATION
	================
	
	The following sample code stores the dedicated heap handle in the static member
	variable m_hHeap. The heap handle is initialized to NULL in the Classdemo.cpp
	file. When a class object is instantiated using new, the overloaded new is
	called. If the handle is NULL, the heap is created. If the handle is not NULL,
	HeapAlloc is called to allocate the requested size.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	     /* Classdemo.h file  */ 
	
	     #ifndef    __CLASSDEMO_H__
	     #define    __CLASSDEMO_H__
	
	     #include   <windows.h>
	
	     class  ClassDemo
	     {
	        // private member vars and functions for ClassDemo class
	
	        static  HANDLE      m_hHeap; // fixed heap handle
	        int     m_nMyData[100];      // class data
	
	     public:
	        // public member functions for ClassDemo class
	        // declaration of new & delete operator overloads
	        void*   operator    new(unsigned int nSize);
	        void    operator    delete(void* pObj);
	        static  void        HeapCreate();
	     };
	
	     #define    INITIAL_HEAP_SIZE   4096    // initial heap size
	     #define    CLASS_DEMO_OBJS_MAX 100000  // max number of objects used
	
	     inline void*   ClassDemo::operator new(unsigned int nSize)
	     {  // allocate memory using fixed heap
	        if  (m_hHeap == NULL)   // if NULL, needs to be created
	        {
	            HeapCreate();       // create heap
	
	            if  (m_hHeap == NULL)
	            {
	                return NULL;    // HeapCreate failed
	            }
	        }
	
	        // return pointer to allocated memory
	        return  HeapAlloc(m_hHeap, 0, nSize);
	     }
	
	     inline void    ClassDemo::operator delete(void* pObj)
	     {  // free memory from fixed heap
	        HeapFree(m_hHeap, 0, pObj);
	     }
	
	     #endif //  __CLASSDEMO_H__
	     /* End of Classdemo.h file  */ 
	
	     /* Classdemo.cpp file  */ 
	     #include   <stdio.h>
	     #include   "ClassDemo.h"
	
	     HANDLE     ClassDemo::m_hHeap = NULL;  // Initialize handle
	
	     void   ClassDemo::HeapCreate()
	     {
	        int nRet = IDRETRY;                          // message box return
	        int nSize = CLASS_DEMO_OBJS_MAX * sizeof(ClassDemo);// max heap size
	
	        m_hHeap = ::HeapCreate(0,                    // heap flags
	                    INITIAL_HEAP_SIZE,               // initial size of heap
	                    nSize);                          // max heap size
	
	        while   ((m_hHeap == NULL) && (nRet != IDIGNORE))
	        {       // keep trying until no error or user ignores
	            char    szMsg[80];                       // message buffer
	
	            // format message
	            sprintf(szMsg, "Could allocate a heap of size %d", nSize);
	            // Display error
	            nRet = MessageBox(NULL, szMsg, NULL,
	                              MB_ABORTRETRYIGNORE | MB_TASKMODAL);
	
	            if  (nSize < sizeof(ClassDemo))
	            {
	                return; // heap would be too small to be usefull, return
	            }
	
	            switch  (nRet)
	            {
	                case    IDABORT:  // user selected abort
	                {
	                    abort();
	                }
	
	                case    IDIGNORE: // user selected ignore
	                {
	                    return;
	                }
	
	                default:  // user selected retry, the message box could not
	                {         // be displayed, or unknown return code
	                    nSize /= 2;  // try a smaller request
	
	                    m_hHeap = ::HeapCreate(
	                                0,                  // heap flags
	                                INITIAL_HEAP_SIZE,  // initial size of heap
	                                nSize);             // max heap size
	                    break;
	                }
	            }
	        }
	     }
	     /*  End of Classdemo.cpp file  */ 
	
	Additional query words: Windows 95 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbcode kbCRT kbLangCPP kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINNT:2.0,2.1,2.2,4.0,5.0;
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
