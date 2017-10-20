---
layout: page
title: "Q150943: PRB: Disk or Network Error When Trying to Run Database App"
permalink: /kb/150/Q150943/
---

## Q150943: PRB: Disk or Network Error When Trying to Run Database App

{% raw %}

	Article: Q150943
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any attempt to run a project or executable that accesses a database fails with
	error 3043 "Disk or Network Error" or a Page Fault.
	
	CAUSE
	=====
	
	This behavior is caused by an invalid or non-existent Temp or TMP directory. The
	problem only affects applications running on Windows NT. Windows 95, Windows 98,
	and Windows 2000 will create a default Temp directory if one does not exist or
	is invalid.
	
	The following combinations of these two environment variables cause the problem:
	
	  TMP missing and Temp missing
	  TMP invalid and Temp missing
	  TMP missing and Temp invalid
	
	RESOLUTION
	==========
	
	Using the System applet in the Control Panel, add or correct the environment
	variable named "Temp" so it points to a valid directory for temporary files such
	as:
	
	     Temp=C:\WINNT35\Temp
	
	Using the System applet in the Control Panel, add or correct the environment
	variable named "TMP" so it points to a valid directory for temporary files such
	as:
	
	     TMP=C:\WINNT35\Temp
	
	Reboot, and note that the database applications run properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. We are researching this issue and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Microsoft Jet engine version 3.0, used by Visual Basic 4.0 to gain access to
	databases, looks for a Temp or TMP environment variable pointing to a valid
	directory in which to store the necessary temporary files. If this information
	cannot be obtained, an error condition is encountered. The version of the Jet
	engine that ships with Visual Basic 4.0 incorrectly causes a Page Fault when an
	error condition is encountered. The version of the Jet engine that ships with
	Access 95 and Visual Basic 4.0a correctly handles the error and displays the
	"Disk or Network Error" error message.
	
	Additional query words: kbVBp400 kbVBp kbDSupport kbGrpVBDB
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
