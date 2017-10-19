---
layout: page
title: "Q249846: PRB: Event ID 4250 When Calling Queued Components"
permalink: /kb/249/Q249846/
---

## Q249846: PRB: Event ID 4250 When Calling Queued Components

	Article: Q249846
	Product(s): Microsoft Windows NT
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kbCOMPlus kbOSWin2000 kbVBp600 kbVS600 kbDSupport kbComPlusQC
	Last Modified: 28-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the method of a queued component instance that takes in an object
	as one of its arguments, the following event log error is generated on the
	client computer:
	
	  Event Type: Error
	  Event Source: COM+
	  Event Category: QC Marshal
	  Event ID: 4250
	  Date: 11/22/1999
	  Time: 6:35:42 PM
	  User: N/A
	  Computer: EDJEZ5
	  Description:
	  An unsupported object reference was used during a method call to a QC
	  component. The object reference should either be a QC recorder or support
	  IPersistStream.
	  QI for IPersistStream
	  Server Application ID: {54535BAC-9DC4-4EC0-957E-3193CEA2C785}
	  Server Application Name: Orders
	  Error Code = 0x80004002 : No such interface supported
	  COM+ Services Internals Information: File: .\marshalinterceptor.cpp, Line: 210
	  Data: 0000: 9f302940 48b3244b a08eb2bb 63b1b32b -->
	
	CAUSE
	=====
	
	This error will appear if the argument object reference is not:
	
	- An instance of a queued component recorder.
	
	  -or-
	
	- A reference of an object that supports IPersistStream.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that the argument object supports
	IPersistStream (in Visual Basic 6.0, you can do this by marking the class as
	"persistable") or that it also is an instance of a queued component.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	MSDN Online Library Queued Components
	(http://msdn.microsoft.com/isapi/msdnlib2.idc?theURL=/library/psdk/cossdk/pgservices_queuedcomponents_2vhv.htm)
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q246627 Passing Objects as Parameters to COM+ Queued Components
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Edward Jezierski, Microsoft Corporation
	
	
	Additional query words: 4250 QC error marshalinterceptor IPersistStream object Marshal
	
	======================================================================
	Keywords          : kbCOMPlus kbOSWin2000 kbVBp600 kbVS600 kbDSupport kbComPlusQC 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,6.0
	Issue type        : kbprb
	
	=============================================================================
	
