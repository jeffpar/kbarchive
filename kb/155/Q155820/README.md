---
layout: page
title: "Q155820: HOWTO: Refresh an Offline View in Visual FoxPro"
permalink: kb/155/Q155820/
---

## Q155820: HOWTO: Refresh an Offline View in Visual FoxPro

	Article: Q155820
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to refresh an offline view, the REQUERY() and REFRESH() functions do
	not work. You need to use the Dropoffline command and then create the offline
	view again.
	
	MORE INFORMATION
	================
	
	The REQUERY() and REFRESH() functions, which are typically used to update a
	view, result in "Invalid operation for offline view." Also an offline view does
	not refresh when you issue the USE ONLINE command. The only way to refresh an
	offline view is to drop the view and re-create it. The code below gives you an
	example of how to refresh an offline view called MYVIEW that resides in
	MYOFFLINE DBC.
	
	WARNING: All uncommitted changes made to the offline view will be lost.
	
	     CLOSE ALL
	     SET MULTILOCKS ON
	     OPEN DATABASE Myoffline
	     =Dropoffline("Myview")
	     =Createoffline("Myview")
	     USE Myview
	     BROWSE
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information about creating offline views, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q155528 HOWTO: Setup an Offline View in Visual FoxPro 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
