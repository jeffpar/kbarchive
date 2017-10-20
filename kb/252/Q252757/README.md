---
layout: page
title: "Q252757: XCLN: Memory Leak in Loop Accessing CDO"
permalink: /kb/252/Q252757/
---

## Q252757: XCLN: Memory Leak in Loop Accessing CDO

{% raw %}

	Article: Q252757
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Visual Basic code that uses Collaboration Data Objects (CDO) and that
	logs on to a mailbox, gets a folder object, and then sets the object to nothing
	in a loop causes a memory leak.
	
	CAUSE
	=====
	
	The reference count for an internal object never reaches zero and it is
	reallocated, which causes the memory leak.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following code may cause the memory leak:
	
	  Dim CdoExpStore As InfoStore
	  Dim i As Integer
	  Dim Cdoexpfolder As MAPI.Folder
	
	      For i = 1 To 10000
	          Set Cdoexpfolder = CdoExpStore.RootFolder
	          Set Cdoexpfolder = Nothing
	      Next i
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
