---
layout: page
title: "Q136046: PC WRmt: Possible Misdirected Mail When Upgrading Address List"
permalink: /kb/136/Q136046/
---

## Q136046: PC WRmt: Possible Misdirected Mail When Upgrading Address List

{% raw %}

	Article: Q136046
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select to update your address lists with Remote Mail for Windows, and
	messages are still in the Outbox, it is possible that those messages will be
	misdirected.
	
	CAUSE
	=====
	
	When a message is composed, there is a pointer associated with the address that
	is referred in the ADMIN.NME and GAL.NME files. When you update the address
	list, it overwrites this entry and offsets the old address with the new entry.
	Depending upon the changes made in the address list, this action can effect the
	pointers to addresses of messages waiting for transmission in the Outbox.
	
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
	
	  File Name     Version
	  -----------------------
	  Msrmt.dll     3.02.4013
	  Msrmtcn.dll   3.02.4013
	  Msrmtsu.dll   3.02.4013
	  Msrmttr.dll   3.02.4013
	  Msrmtui.dll   3.02.4013
	
	This hotfix has been posted to the following Internet location as Remcy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	Do not have messages in the Outbox when you select Update, Address List.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Remote for
	Windows version 3.2
	
	
	Additional query words: 3.20 Remote Address List Pointer
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
