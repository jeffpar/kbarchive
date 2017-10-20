---
layout: page
title: "Q124157: Cannot Build VC++ Projects (.PDB &amp; .PCH Files) on Netware Server"
permalink: /kb/124/Q124157/
---

## Q124157: Cannot Build VC++ Projects (.PDB &amp; .PCH Files) on Netware Server

{% raw %}

	Article: Q124157
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to a build Microsoft Visual C++ project on remote NetWare server
	from your Windows NT computer, one of the following error messages appear:
	
	  Fatal error C2308: program database file, 'filename.pdb', has an obsolete
	  format, delete it and recompile.
	
	  -OR-
	
	  Fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1056)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	
	The errors do not occur if the project is on a local drive or on a remote Windows
	NT server.
	
	CAUSE
	=====
	
	Windows NT has problem passing memory mapped file I/O to the NetWare redirector
	(NWRDR.SYS) and incorrectly writes the .PDB (program database) and .PCH
	(precompiled headers) files to NetWare servers.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	You can work around Error C2308 by using the /Z7 compiler switch. This forces the
	compiler to keep the debugging information in the .OBJ files and not write it to
	.PDB files.
	
	You can work around Error C1001 by turning off the compiler option for the
	pre-compiled headers. To do this, select Settings from the Project menu, select
	C/C++, and turn off the compiler option in the Pre-compiled Headers dialog box.
	
	You can also work around the problem by building the .PDB file or .PCH file on a
	local drive, or by installing the latest U.S. Service Pack for Windows NT
	version 3.5.
	
	NOTE: After installing the latest U.S. Service Pack for Windows NT version 3.5,
	you will continue to receive error when you try to a build Microsoft Visual C++
	project on remote NetWare server until you delete the incorrect .PDB and .PCH
	files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt VC++ plus
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
