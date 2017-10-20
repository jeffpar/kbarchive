---
layout: page
title: "Q184236: BUG: Filebuf overflow() and underflow() Call filebuf::sync()"
permalink: /kb/184/Q184236/
---

## Q184236: BUG: Filebuf overflow() and underflow() Call filebuf::sync()

{% raw %}

	Article: Q184236
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.0a,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangCPP kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The filebuf class allows you to use buffered file input/output (I/O), and
	provides the sync() function to flush the file buffers. However, the
	filebuf::overflow() and filebuf::underflow() functions do not support the use of
	virtual functions in the filebuf class. Classes derived from filebuf might
	incorrectly call filebuf::sync() when they should call the sync() function from
	the derived class.
	
	CAUSE
	=====
	
	The filebuf class calls filebuf::sync() instead of calling sync().
	
	RESOLUTION
	==========
	
	You can use one of the following workarounds to this problem:
	
	- Do not define the virtual function sync() in your filebuf-derived class.
	
	  -or-
	
	  define your own versions of overflow() and underflow() in the derived class.
	
	- Change the filebuf::overflow() and filebuf::underflow() functions to call
	  sync() instead of filebuf::sync(). You can find the source code for filebuf
	  class functions in the following location:
	
	  ...\VC\Src\FileBuf.cpp
	
	  The source code for filebuf::overflow() follows:
	
	        int filebuf::overflow(int c)
	        {
	            if (allocate()==EOF)
	                return EOF;
	            if (filebuf::sync()==EOF) // Change to sync() for the workaround.
	                return EOF;
	
	            if (!unbuffered())
	                setp(base(),ebuf());
	            if (c!=EOF)
	                {
	                if ((!unbuffered()) && (pptr() < epptr()))
	                    sputc(c);
	                else
	                    {
	                    if (_write(x_fd,&c,1)!=1)
	                        return(EOF);
	                    }
	                }
	            return(1);
	       }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mark Hagen, Microsoft Corporation
	
	
	Additional query words: inheritance inherit
	
	======================================================================
	Keywords          : kbcode kbLangCPP kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVCNET kbVC500Search
	Version           : :4.0,4.0a,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
