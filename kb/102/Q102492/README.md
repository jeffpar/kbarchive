---
layout: page
title: "Q102492: PC Ext: Debug Message Displayed Twice When Using -Q1 Option"
permalink: /kb/102/Q102492/
---

## Q102492: PC Ext: Debug Message Displayed Twice When Using -Q1 Option

	Article: Q102492
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.2 of Microsoft Mail for PC Networks, if you use the
	External Mail program (EXTERNAL.EXE) with the -Q1 command-line option, External
	displays two identical messages for each postoffice when it processes mail. The
	messages appear as follows:
	
	  Delivering new mail to NETWORK/POSTOFFICE
	  Delivering new mail to NETWORK/POSTOFFICE
	
	CAUSE
	=====
	
	The double message is given because External is attempting to deliver mail from
	the INQUEUE.MBG and INQUEUE3.MBG files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.20 duplicate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
