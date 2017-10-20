---
layout: page
title: "Q223336: Error in Wowvdm When Installing FrontPage Server Extensions"
permalink: /kb/223/Q223336/
---

## Q223336: Error in Wowvdm When Installing FrontPage Server Extensions

{% raw %}

	Article: Q223336
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the FrontPage Server Extensions to a computer running Windows
	NT Server 4.0, the following error occurs:
	
	  Hidden console of wowvdm
	  C:\Temp\. A temporary file needed for initialization could not be created or
	  could not be written to. Make sure that the directory path exists and disk
	  space is available. Choose Close to terminate the application
	
	CAUSE
	=====
	
	The Temp directory does not exist or does not have sufficient permissions, or
	there is not enough hard disk space available.
	
	RESOLUTION
	==========
	
	Verify that the C:\Temp directory exists, and the Everybody group has full
	control of the folder. Free between 10-15 megabytes of hard drive space on the
	drive that contains the Program Files folder. (You will need more if your html
	content is stored on the same drive.)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
