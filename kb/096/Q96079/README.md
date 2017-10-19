---
layout: page
title: "Q96079: WFWG: List of NCB Return Codes and Comments"
permalink: /kb/096/Q96079/
---

## Q96079: WFWG: List of NCB Return Codes and Comments

	Article: Q96079
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following table lists all the possible network control block (NCB) return
	codes and comments used in Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	  NRC_GOODRET     0x00   good return
	  NRC_BUFLEN      0x01   illegal buffer length
	  NRC_BFULL       0x02   buffers full, no receive issued
	  NRC_ILLCMD      0x03   illegal command
	  NRC_CMDTMO      0x05   command timed out
	  NRC_INCOMP      0x06   message incomplete, issue another command
	  NRC_BADDR       0x07   illegal buffer address
	  NRC_SNUMOUT     0x08   session number out of range
	  NRC_NORES       0x09   no resource available
	  NRC_SCLOSED     0x0a   session closed
	  NRC_CMDCAN      0x0b   command canceled
	  NRC_DMAFAIL     0x0c   PC DMA failed
	  NRC_DUPNAME     0x0d   duplicate name
	  NRC_NAMTFUL     0x0e   name table full
	  NRC_ACTSES      0x0f   no deletions, name has active sessions
	  NRC_INVALID     0x10   name not found or no valid name
	  NRC_LOCTFUL     0x11   local session table full
	  NRC_REMTFUL     0x12   remote session table full
	  NRC_ILLNN       0x13   illegal name number
	  NRC_NOCALL      0x14   no callname
	  NRC_NOWILD      0x15   cannot put * in NCB_NAME
	  NRC_INUSE       0x16   name in use on remote adapter
	  NRC_NAMERR      0x17   called name cannot == name or name #
	  NRC_SABORT      0x18   session ended abnormally
	  NRC_NAMCONF     0x19   name conflict detected
	  NRC_IFBUSY      0x21   interface busy, IRET before retrying
	  NRC_TOOMANY     0x22   too many commands outstanding, retry later
	  NRC_BRIDGE      0x23   ncb_bridge field not 00 or 01
	  NRC_CANOCCR     0x24   command completed while cancel occurring
	  NRC_RESNAME     0x25   reserved name specified
	  NRC_CANCEL      0x26   command not valid to cancel
	  NRC_MULT        0x33   multiple requests for same session
	  NRC_MAXAPPS     0x36   max number of applications exceeded
	  NRC_NORESOURCES 0x38   requested resources are not available
	  NRC_SYSTEM      0x40   system error
	  NRC_ROM         0x41   ROM checksum failure
	  NRC_RAM         0x42   RAM test failure
	  NRC_DLF         0x43   digital loopback failure
	  NRC_ALF         0x44   analog loopback failure
	  NRC_IFAIL       0x45   interface failure
	  NRC_ADPTMALFN   0x50   network adapter malfunction
	  NRC_PENDING     0xff   asynchronous command is not yet finished
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
