---
layout: page
title: "Q98430: Command Line Switches for Basic REDIR"
permalink: kb/098/Q98430/
---

## Q98430: Command Line Switches for Basic REDIR

	Article: Q98430
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article lists and explains the basic REDIR command line switches.
	
	In the table below, the first field is the full switch name, which the enhanced
	REDIR uses. The second field is the short switch name, which the basic REDIR
	(and IBM UI) uses. The third column tells whether the basic REDIR supports the
	switches function. The fourth describes what the switch controls.
	
	Long              Short Basic
	Name                 Name          Support Description
	
	/charcount        /cc   no      Set size of pipe buffers
	/chartime         /ct   no      Set default time to wait for pipe data
	/charwait         /cw   no      Set default flush timeout for pipe buffers
	/computername     /n    no      Set computer name
	/domain           /lg   no      Set workstation domain
	/himem                  yes     Try to put REDIR in XMS 2.0 HMA
	/keepapis         /api  no      Keep API code
	/keepconn         /kc   no      Set dormant connections timeout
	/keepsearch       /ks   no      Set dormant searchestimeout
	/lanroot          /i    no      Set location to load DOS LAN Manager files
	/lim                    no      Run redirector in lim
	/mailslots        /ms   no      Specify if mailslots should be supported
	/maxcmds          /mc   no      Set no. of NCBs the redirector manages
	/numbigbuf        /nbb  no      Set no. of large I/O buffers in redirector
	/numcharbuf       /pn   no      Set no. of pipe buffers
	/numdgrambuf      /mr   no      Set no. of receive buffers for mailslots
	/nummailslots     /mb   no      Set no. of mailslots to use locally
	/numresources     /l    yes     Set no. of network resources to access
	/numservers       /s    yes     Set no. of discrete servers to access
	/numservices      /ns   no      Set no. of LAN Manager services to run
	/numviewedservers /view no      Set no. of servers returned w/ 
	netserverenum
	/numworkbuf       /b    yes     Set no. of buffers in redirector
	/othdomains             no      Specifies other domains to see with net
	view
	/sizbigbuf        /sbb  no      Set size of large I/O buffers in redirector
	/sizcharbuf       /ps   no      Set size of pipe buffers
	/sizworkbuf       /z    yes     Set size of workstation work buffers
	/umb                    no      Try to put REDIR in XMS 2.0 UMBs (LM 2.0c+)
	/wrkheuristics    /wk   no      Set workstation heuristics information
	/wrknets          /wn   no      Sets number of networks
	
	Additional query words: 2.10 2.1 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
