---
layout: page
title: "Q133272: Unattended Windows NT Setup Always Sets Up the Network"
permalink: /kb/133/Q133272/
---

## Q133272: Unattended Windows NT Setup Always Sets Up the Network

{% raw %}

	Article: Q133272
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	The unattended installation method available with Windows NT Setup sets up
	the network, even if the !SetupNetwork value in the answer file,
	UNATTEND.TXT, is changed from YES to NO.
	
	NOTE: The answer file, UNATTEND.TXT, is shipped with the Windows NT 3.5
	Resource Kit.
	
	CAUSE
	=====
	
	The following two errors in the INITIAL.INF file cause this problem:
	
	- Setup compares the value of the variable $(!STF_NTUPGRADE) in INITIAL.INF to
	  the incorrect value YES, without quotes. The comparison value should be
	  "YES", with quotes, instead.
	
	  Here is the code fragment showing the problem in the fourth line:
	
	     ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	             shell "subroutn.inf" GetDefaultAnswer "GuiUnattended"
	     ;;;;;;;;Incorrect String Compare Below;;;;;;;;;;;;;
	             ifstr(i) $(!STF_NTUPGRADE) != YES
	                 ifstr(i) $(!SetupNetWork) == "NO"
	                     set !DoNetwork = $(NotChosen)
	                 endif
	                 ifstr(i) $(!SetupApplications) == "NO"
	                     set !DoAppSetup = $(NotChosen)
	                 endif
	                 set !DoPartial = $(NotChosen)
	                 set !DoPrinter = $(NotChosen)
	             else
	                 set !STF_GUI_UNATTENDED = "NO"
	             endif
	         endif
	
	- Setup compares the value of the variable $(DoNetwork) in INITIAL.INF to the
	  incorrect variable of $(!Chosen). The comparison variable should be
	  $(!NotChosen), instead.
	
	        Incorrect code in INITIAL.INF:
	           ntlanman = +
	           ifstr(i) $(DoNetwork) == $(!Chosen)
	
	        Corrected code:
	           ntlanman = +
	           ifstr(i) $(DoNetwork) == $(!NotChosen)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51.
	
	
	Additional query words: prodnt reskit Resource Kit
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
