---
layout: page
title: "Q185163: PRB: Operation Stopped: Data Has Changed"
permalink: /kb/185/Q185163/
---

## Q185163: PRB: Operation Stopped: Data Has Changed

{% raw %}

	Article: Q185163
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the datacontrol to connect to SQL Server 6.5 via ODBC, when an update is
	attempted after editing a record, the following error may occur:
	
	  3197 "Operation stopped - data has changed" occurs.
	
	CAUSE
	=====
	
	The behavior occurs if an SQL field data type is set to Float and the table does
	not contain a TimeStamp field, or when an SQL indexed field data type is set to
	either Date/Time or Float.
	
	
	RESOLUTION
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q96897 : ACC: Operation Stops When Editing Attached SQL Tables
	
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Microsoft Jet Database Engine Programmer's Guide, First and Second Editions.
	
	Additional query words: kbDSupport kbdse
	
	======================================================================
	Keywords          : kbnokeyword kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
