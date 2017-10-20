---
layout: page
title: "Q247514: XADM: Event ID 295 Message After You Install Spanish Templates"
permalink: /kb/247/Q247514/
---

## Q247514: XADM: Event ID 295 Message After You Install Spanish Templates

{% raw %}

	Article: Q247514
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Spanish language template, empty templates may be
	displayed, and the Microsoft Event Viewer may log the following 12 error
	messages, all of which all have the same event ID:
	
	  Event ID: 295
	  Source: MSExchangeDSImp
	  Type: Error
	
	  Unable to open or read the attribute value include file User.blt.
	
	  Unable to open or read the attribute value include file Distlist.blt.
	
	  Unable to open or read the attribute value include file Forum.blt.
	
	  Unable to open or read the attribute value include file agent.blt.
	
	  Unable to open or read the attribute value include file Remote.blt.
	
	  Unable to open or read the attribute value include file Search.blt.
	
	  Unable to open or read the attribute value include file Exopt.blt.
	
	  Unable to open or read the attribute value include file X400.blt.
	
	  Unable to open or read the attribute value include file Pcmail.blt.
	
	  Unable to open or read the attribute value include file Internet.blt.
	
	  Unable to open or read the attribute value include file Macmail.blt.
	
	  Unable to open or read the attribute value include file Ccmail.blt.
	
	In addition, the following error message may be logged in the Template.err log:
	
	  Unable to open or read the attribute value included file User.blt, Dist.blt,
	  Forum.blt
	
	CAUSE
	=====
	
	This issue can occur if the .blt files were not installed properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the directory import command from the
	foreign-language client CD-ROM where Template.csv is located. The Template.csv
	file on the foreign-language client CD-ROM contains all .blt files that are
	referenced inside the corresponding template .csv file. When you run this
	command, all the required templates are imported. After the import procedure has
	completed from the Administrator program, the localized templates are displayed
	in the following location:
	
	  Addressing/Details Templates/Addressing/One-Off Address Templates
	
	The localized clients are now able to display details about mailboxes, custom
	recipients, or distribution lists.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server, version 5.0 and 5.5
	----------------------------------------------
	
	In Exchange Server versions 5.0 and 5.5, the location of the Template.csv files
	has been changed. These files are now located on the client CD-ROM that comes
	with Microsoft Exchange Server, or in the TPL folder on the foreign-language
	client CD-ROM.
	
	The Template.csv file is located in the TPL folder. If the language that you want
	to use is not included on the client CD-ROM that came with Exchange Server, it
	is located on the client CD-ROM that has the appropriate language of the client.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
