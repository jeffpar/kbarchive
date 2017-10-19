---
layout: page
title: "Q120014: WFW 3.11 RAS: X.25 Script for Sita Group Network Services"
permalink: /kb/120/Q120014/
---

## Q120014: WFW 3.11 RAS: X.25 Script for Sita Group Network Services

	Article: Q120014
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information on how to allow Remote Access Service (RAS)
	client that ships with Windows for Workgroups version 3.11 to automatically
	connect to a Microsoft Windows NT version 3.1 RAS server (equipped with an Eicon
	card) over the Sita Group Network X.25 service. Sita Group Network is also known
	as Scitor, Inc.
	
	Due to a problem in Windows for Workgroups version 3.11 with executing PAD.INF
	scripts, the following post-connect script file has been developed. It needs to
	be pasted into the SWITCH.INF file that is in the system subdirectory of your
	Windows directory.
	
	
	NOTE: The script below may also work with Windows NT and Windows NT Advanced
	Server version 3.1, however, there is a PAD.INF script available for RAS on
	those platforms. For information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q120015 Windows NT RAS: X.25 Script for Sita Group Network Services
	
	MORE INFORMATION
	================
	
	In the script below (starting with ";-------") the following items that appear
	in the script
	
	  [Place X.121 address here]
	  [Place NUI number here]
	  [Place Password here]
	
	need be replaced entirely including the square brackets by the X.121 address of
	the server, the users Network User Interface (NUI) number which usually has the
	format "NUI xxxxxxxx" (where the xxxxxxxx needs to be replaced with the
	eight-digit NUI number and the password).
	
	Edit and paste the following lines into your SWITCH.INF (not PAD.INF) file:
	
	  ;---------------------------------------------------
	  [SITA GROUP NETWORK]
	
	  COMMAND=...<cr>
	  OK=<match>"SITA NETWORK:"
	
	  COMMAND=[Place NUI number here]<cr>
	  OK=<ignore>
	
	  COMMAND=[Place password here] <cr>
	  OK=<ignore>
	
	  COMMAND=PROF 6<cr>
	  NoResponse
	
	  COMMAND=
	  NoResponse
	
	  COMMAND=SET 2:1<cr>
	  OK=<ignore>
	
	  COMMAND=
	  NoResponse
	
	  COMMAND=SET 4:1,6:1,16:0,17:0,18:0,19:0,21:0<cr>
	  OK=<ignore>
	
	  COMMAND=
	  NoResponse
	
	  COMMAND=SET 118:0,119:0,120:0<cr>
	  OK=<ignore>
	
	  COMMAND=PAR?<cr>
	  OK=<ignore>
	
	  COMMAND=SET 2:0<cr>
	  NoResponse
	
	  COMMAND=
	  NoResponse
	
	  COMMAND=[Place X.121 address here]<cr>
	  CONNECT=<ignore>
	
	  ---------  End of script-------------------------
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: wfw wfwg 3.11 thirdparty 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.11
	
	=============================================================================
	
