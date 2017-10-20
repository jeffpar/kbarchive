---
layout: page
title: "Q137408: DOC: Can't Use ConnectName Property w/SQLGETPROP() Function"
permalink: /kb/137/Q137408/
---

## Q137408: DOC: Can't Use ConnectName Property w/SQLGETPROP() Function

{% raw %}

	Article: Q137408
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbinterop kbdocfix kbvfp300 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Documents that ship with the Professional Edition of Microsoft Visual FoxPro
	version 3.0 for Windows and the Visual FoxPro Help file incorrectly list the
	ConnectName property as being available with the SQLGETPROP() function. However,
	using the ConnectName property with SQLGetProp results in this error:
	
	  Incorrect Property Name
	
	The ConnectName property can be used with the CURSORGETPROP() function to return
	the result that would be expected with the SQLGETPROP() function.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the ODBC Administrator to establish a data source, and assign it a name.
	  One of the tables within Testdata.dbc can be copied to a type FOX2X to be
	  used in this example as follows:
	
	     USE C:\Vf\Samples\Data\Customer.dbf
	     COPY TO odbctest TYPE FOX2X
	
	2. After the data source has been set up with the ODBC Administrator, create and
	  run a program containing this code:
	
	     handle=SQLConnect("<Data_Source_Name>")
	     =SQLExec(handle,"USE odbctest")
	     =SQLExec(handle,"SELECT * FROM odbctest")
	     ? SQLGetProp(handle,"ConnectName")       && This will produce the
	                                              && error:
	                                              && "Incorrect Property Name"
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbinterop kbdocfix kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	
	=============================================================================
	

{% endraw %}
