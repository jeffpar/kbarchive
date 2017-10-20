---
layout: page
title: "Q195852: XFOR: Notification Option Set Incorrectly During Migration"
permalink: /kb/195/Q195852/
---

## Q195852: XFOR: Notification Option Set Incorrectly During Migration

{% raw %}

	Article: Q195852
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you migrate GroupWise 4.x calendar data (for example, Appointments, Tasks,
	Notes) that have alarms set and that have all past and gone off, they go off
	again in Outlook 98.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Migration Wizard
	
	  File Name     Version
	  ------------------------
	  Mlmig32.dll   5.5.2426.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	If you open the *.sc2 file by using any text editor, you will see something
	similar to the following. The Ring is set to T and it causes the alarm to go off
	again in Outlook 98:
	
	     SCHEDULE+2 EXPORT VERSION 103
	     SingleAppointments:
	     {
	        Start: 09-10-1998 11:20
	        End: 09-10-1998 12:20
	        Ring: T
	        BusyType:   1
	        Text: "app"
	        Notes:
	         "-----------------------------------------------------------From:
	        admin-----------------------------------------------------------To:
	         admin"
	     }
	
	Additional query words: reminders
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
