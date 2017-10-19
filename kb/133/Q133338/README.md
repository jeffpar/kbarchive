---
layout: page
title: "Q133338: Automating DLC Installation"
permalink: /kb/133/Q133338/
---

## Q133338: Automating DLC Installation

	Article: Q133338
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5,3.51 
	- Microsoft Windows NT Workstation version 3.5,3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the DLC protocol is not installed during Windows NT Setup. However,
	you can accomplish unattended installation of DLC by modifying the default setup
	files included with Windows NT. You must then run WINNT.EXE or WINNT32.EXE with
	the /U switch and designate an answer file. The answer file must include entries
	necessary to successfully setup a network adapter.
	
	MORE INFORMATION
	================
	
	To make the necessary modifications:
	
	1. Copy the i386 directory from the Windows NT compact disc to your hard disk
	  drive.
	
	2. Expand \I386\NTLANMAN.IN_ to \I386\NTLANMAN.INF.
	
	3. Rename \I386\NTLANMAN.IN_ to \I386OEMNXPTC.BK_.
	
	4. Add the following entry to the [Service Data] section of the NTLANMAN.INF
	  file.
	
	        ProtoData_4      = "OEMNXPDL.INF","DLC",4,dlc
	   
	
	  The ProtoData_4 line must immediately follow the ProtoData_3 line.
	
	5. Find the following for loop in the NTLANMAN.INF file
	
	        ForListDo $(ProtoInfList)
	                Set AddIt = 0
	                ifstr *($(ProtoOptionList),$(#)) == "NBF"
	                    ifint $(!InstallNetBEUI) == 1
	                        Set AddIt = 1
	                    endif
	                else-ifstr *($(ProtoOptionList),$(#)) == "TC"
	                    ifint $(!InstallTCPIP) == 1
	                        Set AddIt = 1
	                    endif
	                else-ifstr *($(ProtoOptionList),$(#)) == "NWLNKIPX"
	                    ifint $(!InstallNWLink) == 1
	                        Set AddIt = 1
	                    endif
	   
	
	  and add the following three lines:
	
	        else-ifstr *($(ProtoOptionList),$(#)) == "DLC"
	                Set AddIt = 1
	        endif
	   
	
	  The new for loop should read as follows:
	
	        ForListDo $(ProtoInfList)
	                Set AddIt = 0
	                ifstr *($(ProtoOptionList),$(#)) == "NBF"
	                    ifint $(!InstallNetBEUI) == 1
	                        Set AddIt = 1
	                    endif
	                else-ifstr *($(ProtoOptionList),$(#)) == "TC"
	                    ifint $(!InstallTCPIP) == 1
	                        Set AddIt = 1
	                    endif
	                else-ifstr *($(ProtoOptionList),$(#)) == "NWLNKIPX"
	                    ifint $(!InstallNWLink) == 1
	                        Set AddIt = 1
	                    endif
	                else-ifstr *($(ProtoOptionList),$(#)) == "DLC"
	                        Set AddIt = 1
	                endif
	   
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
