---
layout: page
title: "Q162958: FIX: Format of the Password Parameter for CompactDatabase"
permalink: /kb/162/Q162958/
---

## Q162958: FIX: Format of the Password Parameter for CompactDatabase

{% raw %}

	Article: Q162958
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2 5.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbdocerr kbDAOsearch kbDatabase kbMFC kbDocs kbVC kbVC400bug kbVC410 kb
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the CDaoWorkspace::CompactDatabase function does not
	specify the format of the password parameter. The password must be in the
	following format: ";PWD=password". If the password is not in the correct format,
	you may see the following error:
	
	  Can't find installable ISAM
	
	MORE INFORMATION
	================
	
	The documentation for the CDaoWorkspace::CompactDatabase function gives the
	following information about compacting a password-protected database:
	
	static void PASCAL CompactDatabase( LPCTSTR lpszSrcName, LPCTSTR
	   lpszDestName, LPCTSTR lpszLocale, int nOptions, LPCTSTR lpszPassword );
	
	Parameters
	lpszPassword   A password, used when you want to compact a
	              password-protected database. Note that if you use the
	              version of CompactDatabase that takes a password, you must
	              supply all parameters.
	
	There is no information about the format of the password parameter. However, the
	documentation for the DBEngine.CompactDatabase function has the following
	information:
	
	Syntax
	DBEngine.CompactDatabase olddb, newdb [, locale [, options
	   [, ;pwd=password]]]
	
	Part           Description
	password       An optional string argument containing a password, if the
	              database is password protected. The string ";pwd=" must
	              precede the actual password.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     /* The following code will compress the database C:\DB1.MDB, which has
	      * a password of "MyPassword"
	     */ 
	
	      try
	      {
	          CDaoWorkspace::CompactDatabase( _T( "C:\\DB1.MDB" ),
	              _T( "C:\\DB2.MDB" ), dbLangGeneral, dbVersion30,
	              _T( ";PWD=MyPassword" ) );
	      }
	      catch( CDaoException* e )
	      {
	          AfxMessageBox( e->m_pErrorInfo->m_strDescription );
	          e->Delete();
	      }
	
	STATUS
	======
	
	This problem was corrected in the documentation for Visual C++, version 6.0.
	
	REFERENCES
	==========
	
	Visual C++ Books Online: CDaoWorkspace::CompactDatabase Visual C++ Books Online:
	DBEngine.CompactDatabase
	
	Additional query words: Access Jet
	
	======================================================================
	Keywords          : kbcode kberrmsg kbdocerr kbDAOsearch kbDatabase kbMFC kbDocs kbVC kbVC400bug kbVC410 kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.0 4.1 4.2 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
