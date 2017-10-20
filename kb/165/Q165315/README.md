---
layout: page
title: "Q165315: PC WRmt: MS Mail Remote Users Not Able to View Attachments"
permalink: /kb/165/Q165315/
---

## Q165315: PC WRmt: MS Mail Remote Users Not Able to View Attachments

{% raw %}

	Article: Q165315
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2; winnt:4.0
	Operating System(s): 
	Keyword(s): kbpatch
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Microsoft Mail for PC Networks Windows Remote client may display the following
	message when you attempt to open an attachment that you received by being a
	member of an Exchange Server Distribution List (DL):
	
	  The Attached file <filename> could not be opened because a temporary
	  file could not be created.
	
	This occurs when the message contains a large number of recipients and the
	recipient data exceeds 32K bytes.
	
	CAUSE
	=====
	
	A logic error in the remote mail client caused the attachment to fail to be
	renamed. This prevents it from being downloaded to the MMF file. The reference
	to the attachment exists in the message, but the actual attachment has been
	lost. When you attempt to use the attachment, the error message is displayed.
	
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
	  Msrmttr.dll   3.02.4015
	
	This hotfix has been posted to the following Internet location as Remcy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Remote for
	Windows version 3.2.
	
	MORE INFORMATION
	================
	
	It may be possible to work around this problem by creating DLs that consist of
	groups created by the Microsoft Mail for PC Networks administrators. These group
	names are not expanded and can be distributed to other postoffices and included
	in a larger group.
	
	If the large DL is created in Exchange Server, it may be possible to create the
	DL using smaller DLs and nesting these into the main DL.
	
	
	Additional query words: remote dl exchange
	
	======================================================================
	Keywords          : kbpatch 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
