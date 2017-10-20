---
layout: page
title: "Q136004: PC Ext: Inaccurate Non-Delivery Reports or Duplicate Mail"
permalink: /kb/136/Q136004/
---

## Q136004: PC Ext: Inaccurate Non-Delivery Reports or Duplicate Mail

{% raw %}

	Article: Q136004
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The file locking timing method used when you run multiple External Mail programs
	against asynchronously connected postoffices (POs) with two way connection
	enabled can result in inaccurate non-delivery reports (NDRs) or possible
	duplicate mail.
	
	The above problem can have the following symptoms:
	
	- Misleading NDRs and SYSTEM.LOG entries:
	
	  
	
	     
	
	  External program has detected a mail problem.
	     Message data:
	       From: /USERONE
	       Date: 07-06-95
	       Time: 09:01
	       Subject: RE: Testing
	     [005] Mail retry count exceeded sending to:  MAILNET  /MAILPO
	     [016] Message was not sent due to missing message file.
	     Missing file is O:MAI\MA4\0006A044.MAI.
	
	  However, the SENT.LOG file shows that the message was successfully delivered
	  prior to this attempt.
	
	- Messages are received a second time with only the subject line.
	
	- Duplicate messages.
	
	With the original file locking method, after sending mail, the MBG .OLK file was
	deleted before the ATT, MAI, and other associated P1 files were deleted. As a
	result, the MBG file would be unlocked too quickly. Another External Mail
	program may attempt to lock the mailbag and process the mail before the previous
	External Mail program had cleaned up properly, resulting in the above errors.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  Async.ovl      3.5.20
	  External.exe   3.5.20
	  X25atlan.ovl   3.5.20
	  X25eicon.ovl   3.5.20
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	version 3.5. Additional query words: 3.50
	KBCategory: kbenv kbbug3.50
	KBSubcategory: MailPCExt
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : :3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
