---
layout: page
title: "Q151738: Known Issues Concerning E-Mail on MSN"
permalink: /kb/151/Q151738/
---

## Q151738: Known Issues Concerning E-Mail on MSN

{% raw %}

	Article: Q151738
	Product(s): The Microsoft Network
	Version(s): 2.6,5.0,5.1,5.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.6, 5.0, 5.1, 5.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists known issues concerning e-mail on MSN, The Microsoft Network.
	
	MORE INFORMATION
	================
	
	Bcc Addresses Shown on To Line
	------------------------------
	
	Addresses from the Bcc line of a mail message may appear on the To line if you
	leave the To line blank.
	
	
	Long Attached File Name Causes GP Fault
	---------------------------------------
	
	If you receive a message that contains a file with a name that contains more than
	255 characters, you receive the following error message when you attempt to open
	the message:
	
	  This program has performed an illegal operation and will be shut down.
	
	
	Mismatched Quotation Marks
	--------------------------
	
	If you reply to a message that has the addressees' friendly names in quotation
	marks and there is a mismatched set of quotation marks, your reply message may
	not be delivered to some of the addressees.
	
	
	GP Fault Attempting to Check Member Properties Offline
	------------------------------------------------------
	
	If you are not connected to MSN, open an MSN mail message, attempt to view the
	member's properties by double-clicking the name in the From field, and then
	click Cancel on the Sign In screen, a blank User Properties dialog box appears.
	You may also receive the following error message:
	
	  GUIDE caused an invalid page fault in module KERNEL32.DLL at 0137:bff9a07c
	
	
	Inaccurate Non-Delivery Message
	-------------------------------
	
	If you send mail to an invalid Internet address, you may receive a non- delivery
	message that states you sent mail to an invalid MSN account.
	
	
	Cannot Cancel Mail Delivery
	---------------------------
	
	Clicking the Cancel button while e-mail messages are being delivered does not
	stop delivery of messages. Clicking Cancel also does not stop the updating of
	headers when you are using Remote Mail.
	
	
	Additional query words: msn exchange email gpf kbimu
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN520 kbMSN510 kbMSN500 kbMSN260
	Version           : :2.6,5.0,5.1,5.2
	Issue type        : kbprb kbinfo
	
	=============================================================================
	

{% endraw %}
