---
layout: page
title: "Q142662: CPS Fails to Clone a Server with WINS"
permalink: kb/142/Q142662/
---

## Q142662: CPS Fails to Clone a Server with WINS

	Article: Q142662
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Computer Profile Setup (CPS) utility in the Windows NT Resource Kit allows
	you to set up Windows NT Workstation or Windows NT Server on multiple, identical
	x86-based computers. However, when you try to duplicate a Windows NT Server that
	has Windows Internet Naming Service (WINS), CPS fails to set up a Windows NT
	Server with WINS.
	
	CPS uses two utilities: one to make a copy of an installed Windows NT system and
	one to set up new Windows NT systems using this copy. When CPS is used to
	duplicate a Windows NT Server system with WINS installed, the WINS service fails
	to start on the newly installed Windows NT servers and WINS has to be
	reinstalled.
	
	CAUSE
	=====
	
	This behavior is due to the fact that a WINS database built on a particular
	system cannot be used on another system with another IP address. Therefore CPS
	does not copy the Wins.mdb file on the target platform.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q140971
	  TITLE : WINS Service Generates a System Error 1 Incorrect Function
	
	WORKAROUND
	==========
	
	The following workaround allows you to set up a fresh installation of WINS along
	with CPS.
	
	1. Install a Windows NT 3.51 Server with WINS service.
	
	2. Copy the Resource Kit CPS files under C:\CPS.
	
	3. Modify C:\Cps\Profile.ini as required.
	
	4. Run C:\Cps\Uplodprf -s:X:\FLAT, where X:\FLAT is the directory used for
	  future installations.
	
	5. Remove all WINS files in the flat:
	
	  "del X:\FLAT\WINNT35.0\SYSTEM32\WINS\*.*" (without the quotation marks)
	
	6. Insert Windows NT Server distribution compact disc in the CD-ROM (in the
	  example below it is drive D) and carry out the following commands :
	
	  copy D:\I386\SYSTEM.MD_ X:\FLAT\WINNT35.0\SYSTEM32\WINS
	  X:
	  cd \FLAT\WINNT35.0\SYSTEM32\WINS
	  attrib -r SYSTEM.MD_
	  expand -r SYSTEM.MD_
	  del X:\FLAT\WINNT35.0\SYSTEM32\WINS\SYSTEM.MD_
	
	This will restore the distribution file System.mdb. When WINS is installed on a
	server, the System.mdb distribution file is copied to %SystemRoot%\System32\WINS
	and a new Wins.mdb database file is created the first time the WINS server
	attempts to start.
	
	1. Modify Dosnet.inf as follows:
	
	NOTE: Because some files have been removed from the WINS subdirectory, the
	Dosnet.inf file included in X:\FLAT must be modified so that you are not
	prompted with an error message stating that these files could not be copied.
	
	  Edit X:\FLAT\DOSNET.INF and remove the following three lines :
	
	     d10,Jet.log
	     d10,winstmp.mdb
	     d10,wins.mdb
	
	1. Run WINNTP on the target platform.
	
	WINS will be installed on the target platform and a new WINS database will be
	created. If you need to use the WINS entries of the master server, you need to
	configure pull/push partners.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
