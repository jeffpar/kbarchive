---
layout: page
title: "Q155765: XADM: Store Crashes in Ecreleaselogonop"
permalink: /kb/155/Q155765/
---

## Q155765: XADM: Store Crashes in Ecreleaselogonop

{% raw %}

	Article: Q155765
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may have an access violation
	when you are adding a logon to a list of logons associated with a session.
	
	CAUSE
	=====
	
	The access violation occurs because of a logic error in the way that the
	information store resizes an array used to store the logon session object.
	
	STATUS
	======
	
	This problem was first corrected in Exchange Server 4.0 Service Pack 4.
	This problem was first corrected in Exchange Server 5.0 Service Pack 1.
	
	
	MORE INFORMATION
	================
	
	If the Microsoft Windows NT Server and Microsoft Exchange Server symbols are
	properly installed on the system, a stack trace similar to the following will be
	generated in the Dr. Watson log:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0584f8dc  020b5ff1  0000000d 00000001 0584fa8c
	     STORE!EcReleaseLogonOp+0x6
	  (0x00000000, 0x00000000)
	  0584f8f8  0210677f  0000000d 0053e954 0584fa48
	     STORE!SESS::EcAddLogon+0x101
	  (0x0428F98C, 0x00000000, 0x00000000)
	  0584fa8c  020038fc  0428f98c 0000000d 0584fac8 STORE!EcLogon+0x23a
	  (0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000)
	  0584faf8  02003cfb  0524de20 0053b91c 0584fb1c STORE!EcRpc+0xd47
	  (0x00000000, 0x00000000, 0x00000000, 0x00000000)
	  0584fb20  77e8eb7a  0524de20 0053b91c 05242eb2 STORE!EcDoRpc+0x3d
	  (0x00000000, 0x00000000, 0x00000000, 0x0000)
	  0584fe28  77e8e876  00000000 00000000 0584ff10
	     RPCRT4!tree_peek_ndr+0x105
	  0584fe7c  77e61374  02002b36 0584ff10 0584ff3c
	     RPCRT4!data_size_ndr+0x1e9
	  0584fed0  77e6162d  0584ff10 00000000 0584ff3c
	  RPCRT4!NdrServerInitialize+0x6c
	  0584fef0  77e6c005  0584ff10 00000000 0584ff3c
	  RPCRT4!?DealWithRequestMessage
	  @WMSG_SASSOCIATION@@QAEXPAT_WMSG_MESSAGE@@
	  0PAU_RPC_MESSAGE@@PAPAVWMSG_SBINDING@@IHH@Z+0x127
	  05242ca0  89abcdef  05242cb8 00000004 00000001
	     RPCRT4!?DuplicateDceBinding
	  @DCE_BINDING@@QAEPAV1@XZ+0x1f
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
