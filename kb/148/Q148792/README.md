---
layout: page
title: "Q148792: PC Ext: Not Dial the Modem at the Regular Interval Variable"
permalink: kb/148/Q148792/
---

## Q148792: PC Ext: Not Dial the Modem at the Regular Interval Variable

	Article: Q148792
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When mail is queued to a postoffice (PO) defined direct via modem, the External
	Mail program (EXTERNAL.EXE) does not dial the modem when the specified regular
	interval period expires.
	
	CAUSE
	=====
	
	One possible cause is that a large number of postoffices may be defined direct
	via modem. The External Mail program will cycle through this list until it finds
	mail queued for transfer. Then it checks to see if the Regular Interval variable
	has expired. The time required to cycle through the externally-defined
	postoffices may be longer than the Regular Interval variable, making it appear
	that the regular interval is being ignored.
	
	WORKAROUND
	==========
	
	Possible methods to maintain the Regular Interval variable are to reduce the
	number of externally-defined postoffices or to increase the Regular Interval
	variable time frequency.
	
	Additional query words: 3.00 3.00a 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
