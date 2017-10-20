---
layout: page
title: "Q271289: Microsoft Reader Err Msg: You Have Reached Your Activation Limit"
permalink: /kb/271/Q271289/
---

## Q271289: Microsoft Reader Err Msg: You Have Reached Your Activation Limit

{% raw %}

	Article: Q271289
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader for the Pocket PC, version 1.0 
	- Microsoft Reader, version 1.5 
	- Microsoft Reader version 2.0 
	- Microsoft Reader for the Pocket PC, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an eBook that you purchased online in Microsoft Reader, you may
	receive the following error message:
	
	  Activation Error
	
	  You have reached your Activation limit.
	
	CAUSE
	=====
	
	The Microsoft Reader software is associated with a Passport account that is
	unique to the user of the Reader software. Each Passport account can only be
	associated with two Microsoft Reader installations.
	
	You can install Microsoft Reader on up to four machines if you use only one
	Passport account. For example, you can install Microsoft Reader on:
	
	- A home computer and a work computer
	
	- A home computer and a laptop or Pocket PC
	
	- Four home computers
	
	Microsoft Reader is associated to your Passport account, and a unique Hardware
	ID. This Hardware ID is generated from the volume serial number of the system
	hard disk.
	
	If you reformat your hard disk and then reinstall Microsoft Reader, the Reader
	software may be unable to be associated with the original passport account
	because formatting the hard disk changes the volume serial number of the hard
	disk, which changes the unique Hardware ID. As a result, you may receive the
	"Activation Error" error message.
	
	For example, you receive this error message if:
	
	- You install Microsoft Reader on two computers and associate Reader with one
	  Passport account. You then reformat the hard disk of one computer and attempt
	  to associate the Reader software with the original Passport account.
	
	- You install Microsoft Reader on one computer, reformat the hard disk,
	  reinstall the Reader software, and associate the Reader software with the
	  original passport account. You then repeat this process.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Microsoft Reader can be activated on as many machines as required but you may
	need to associate the Reader software with different Passport accounts. If you
	purchase an eBook on a computer on which you associate the Reader software with
	your first Passport account, you are unable to read that eBook title on a
	computer on which you associate the Reader software with a different Passport
	account.
	
	Customers can request more activations at:
	
	  http://das.microsoft.com/activate/en-us/extraDefault.asp
	
	NOTE: If you fill out the form and receive an Access Denied message or it loops
	back to the same page, locate and click the "click here to submit it for review"
	link. Clicking this link submits your request for more activations.
	
	Additional query words: reader msreader e-books pocketpc fdisk
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbOSWinCE kbReaderSearch kbPocketSearch kbReader150 kbPocketReader100 kbReader200 kbPocketReader200
	Version           : :1.0,1.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
