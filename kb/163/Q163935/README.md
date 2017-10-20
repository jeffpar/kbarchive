---
layout: page
title: "Q163935: FIX: Error &quot;Invalid Page Fault&quot; When Connecting to Sybase"
permalink: /kb/163/Q163935/
---

## Q163935: FIX: Error &quot;Invalid Page Fault&quot; When Connecting to Sybase

{% raw %}

	Article: Q163935
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbMDAC250kbbuglist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs after disconnecting from Sybase server and
	reconnecting:
	
	  "VFP caused an invalid page fault in module LIBCOMN.DLL"
	
	This error occurs if the SQLCONNECT() function is used for connecting, and two or
	more connections have been made to Sybase 10 or 11. When any connection that was
	created before the last connection is terminated and then another connection is
	created, the error occurs. However, it only occurs with Sybase and the Sybase
	ODBC driver from Intersolv. Other database servers, such as SQL Server and
	Oracle, work correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	If an SQL connection is created with the SQLCONNECT() function, a numerical
	value is stored to the connection handle of the connection. If the value is
	greater than zero, then the connection is valid. The first connection usually
	has a value of one, and the second of two, and so forth. When one of the
	connections before the last connection is terminated, that termination leaves a
	lower number available for a future connection to use. Creating a new connection
	that uses one of these lower numbers causes the error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Issuing the following code in a program (.PRG) file or from the Command window
	will cause the error to occur. After issuing each SQLCONNECT() function, you
	need to select the data source for Sybase and enter the correct UserId and
	password in the Logon dialog box. Note that x and y must return numbers greater
	than zero to ensure a valid connection:
	
	        x = SQLCONNECT()
	        ? x
	        y = SQLCONNECT()
	        ? y
	        = SQLDISCONN(x)
	        z = SQLCONNECT()
	        ? z
	
	Additional query words: kbvfp600fix
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbMDAC250 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
