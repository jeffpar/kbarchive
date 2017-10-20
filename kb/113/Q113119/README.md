---
layout: page
title: "Q113119: PC Ext: External 3.2 Decrements Retry Count"
permalink: /kb/113/Q113119/
---

## Q113119: PC Ext: External 3.2 Decrements Retry Count

{% raw %}

	Article: Q113119
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the External Mail program included with version 3.2 of Microsoft Mail for PC
	Networks, any of the following modem return codes decrement the mail retry
	counter:
	
	  3 - NO CARRIER
	  4 - ERROR
	  6 - NO DIALTONE
	  7 - BUSY
	  8 - NO ANSWER
	
	A new return code, 9 - DIAL_REJECT, has been implemented that does not decrement
	the reject counter when it is returned by the modem script. If this code is
	returned, the External Mail program will continue trying to send the message
	until the useful life of the message has been exceeded.
	
	CAUSE
	=====
	
	In versions of Mail earlier than 3.2, a return code of 3, 4, 6, or 7 decrements
	the retry counter, while 8 does not.
	
	RESOLUTION
	==========
	
	Modify the modem script to use return code 9, and therefore not decrement the
	counter. For example, if one of the External Mail programs in the Mail system is
	often busy, make the following change to ensure that mail is not rejected
	unnecessarily. (The following example is taken from the HAYES24.MDM script; this
	modification is similar in all scripts.)
	
	Change the following
	
	     else if (response = "7^M")
	
	               {
	               display ">>> BUSY <<<"
	               $ret = 7             ; busy
	               }
	
	to:
	
	     else if {response = "7^M"}
	
	               {
	               display ">>> BUSY <<<"
	               $ret = 9
	               }
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
