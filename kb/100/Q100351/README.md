---
layout: page
title: "Q100351: Steps to Complete NPREP on a 3Com 3Server"
permalink: /kb/100/Q100351/
---

## Q100351: Steps to Complete NPREP on a 3Com 3Server

{% raw %}

	Article: Q100351
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	You can install LAN Manager MS-DOS workstations from diskettes or over the
	network (OTN). During OTN installations and upgrades, LAN Manager is copied from
	a network installation share on a LAN Manager server. This sharename and the
	files contained in it are created by the NPREP.EXE program.
	
	This article explains the use of this program in a 3Com 3Server.
	
	MORE INFORMATION
	================
	
	The 3Com 3Server architecture does not allow running the NPREP program, so all
	necessary software (or the normal LAN Manager server software) is installed
	automatically from the tape when you install the LAN Manager software on your
	3Com server.
	
	You must complete some manual steps to put the 3Server in the same state that a
	regular LAN Manager server is in after running NPREP.
	
	1. Create the NINSTALL share.
	
	  From either the command line or from the NETADMIN screen, create a share
	  called NINSTALL that points to <lanroot>\NINSTALL.
	
	2. Assign the permissions to that share.
	
	  From either the command line or from the NETADMIN screen assign USERS and
	  GUESTS, Read and eXecute permissions to the files contained in the previous
	  share.
	
	Once you have done this, you can perform the steps on page 83 of the "Microsoft
	LAN Manager Installation and Configuration Guide" to create your configuration
	templates and network installation disks.
	
	REFERENCES
	==========
	
	"Microsoft LAN Manager Installation and Configuration Guide"
	
	Additional query words: otn netinstall 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
