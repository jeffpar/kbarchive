---
layout: page
title: "Q100541: Transferring a LAN Manager Server to a High-end Machine"
permalink: /kb/100/Q100541/
---

## Q100541: Transferring a LAN Manager Server to a High-end Machine

{% raw %}

	Article: Q100541
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	To transfer a LAN Manager server to a high-end machine, use the two procedures
	below. The first transfers the accounts database, file privileges, logs, etc.
	The second works for the ACL permissions on HPFS volumes.
	
	FIRST PROCEDURE
	---------------
	
	1. Net stop workstation/server in the old machine.
	
	2. Copy LAN Manager directory to LANMAN.BAK directory.
	
	3. Start server and share the LANMAN.BAK directory as LMBAK sharename in the old
	  machine.
	
	4. Setup the new machine as backup domain controller. Transfer the
	  LANMAN/ACCOUNTS directory.
	
	5. Net use LMBAK and copy all files to LMBAK directory of the new machine.
	
	6. Copy all directories from old machine except OS/2 and LAN Manager.
	
	7. Net stop workstation/server in the new machine.
	
	8. Copy all files of LMBAK directory to the new machine's LAN Manager directory.
	
	9. Net start the new machine then change the backup domain controller to primary
	  domain controller.
	
	SECOND PROCEDURE (FOR EACH HPFS DRIVE)
	--------------------------------------
	
	Type:
	
	  " backacc <drive>:\ /f:acl<drive>.acl /s[enter]" (without the
	  quotation marks)
	
	and copy the .ACL files to the new server. Type:
	
	  " restacc <drive>:\ /f:acl<drive>.acl /s[enter]" (without the
	  quotation marks)
	
	In this case you are copying the ACL files to the new server then using Restacc
	to apply the permissions stored in the files to the resources on the server. If
	you can access the old server over the network the copy is not really needed;
	just specify a redirected drive for the location on the restacc /f switch.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
