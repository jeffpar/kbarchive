---
layout: page
title: "Q117646: PC DB: Ownerless Files on Novell Networks"
permalink: /kb/117/Q117646/
---

## Q117646: PC DB: Ownerless Files on Novell Networks

{% raw %}

	Article: Q117646
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1, 3.0, 3.0b, and 3.2 of Microsoft Mail for PC Networks running on a
	Novell file server may exhibit strange behavior when files in the mail system
	database become ownerless.
	
	Several common indicators of ownerless files in the database are:
	
	- File I/O: Short Write (displayed in the external's SESSION.LOG file)
	
	- Notice 58: Postoffice Address List already has an alias with this name.
	
	- Error Mailing To MailBag
	
	CAUSE
	=====
	
	Files become ownerless on Novell networks when the owner of the file is deleted
	from the bindery. When a file becomes ownerless, it can grow only to the next
	multiple of its block size. The default block size is 4k.
	
	RESOLUTION
	==========
	
	You can find ownerless
	(http://support.microsoft.com/download/support/mslfiles/ownerless) files by
	using the Novell NDIR command, and assign owners to them by using the Novell
	FILER utility.
	
	It is not a good idea to allow any mail system database files to be ownerless,
	but ownerless ACCESS.GLB, ACCESS2.GLB, and ACCESS3.GLB files can seriously
	undermine the integrity of the database when new users are added to a .GLB file
	with no deleted records.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99725 PC DB: Checking for Ownerless Files in NetWare
	
	Additional query words: 2.1x 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210
	Version           : :2.1,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
