---
layout: page
title: "Q149986: Creating a .SCD File for an Existing Profile"
permalink: kb/149/Q149986/
---

## Q149986: Creating a .SCD File for an Existing Profile

	Article: Q149986
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	7.00
	WINDOWS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you chose the I Do Not Want a Schedule File on this Machine option, you will
	not have access to the Schedule+ 7.0 appointments, contacts, tasks, etc. if your
	connection to the server is lost.
	
	RESOLUTION
	==========
	
	Create a local .SCD file by doing the following steps:
	
	1. Run Schedule+ 7.0.
	
	2. Click Options on the Tools menu. Select the Synchronize tab, and select the
	  option Work Primarily from Local File.
	
	3. Click the OK button.
	
	4. In the Select Local .SCD dialog box, ensure the UserName is correct in the
	  File Name: field, and click the Open button.
	
	  A new local .SCD file will be created. The local SCD file will be populated
	  using the Schedule+ 7.0 information stored on the Microsoft Exchange Server.
	
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
