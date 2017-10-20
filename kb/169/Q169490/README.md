---
layout: page
title: "Q169490: SNA Server Appears to Be Offline After MNGAGENT AV"
permalink: /kb/169/Q169490/
---

## Q169490: SNA Server Appears to Be Offline After MNGAGENT AV

{% raw %}

	Article: Q169490
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The access violation shown below may occur unexpectedly in the MNGAGENT process
	running on an SNA Server computer. This will cause Manager to display the SNA
	Server as offline, although the server may still be running properly. An
	<Ntroot>\Drwtsn32.log entry may be created as follows:
	
	  
	
	  Application exception occurred:
	     App: mngagent.DBG (<process id>)
	     Exception number: c0000005 (access violation)
	
	  function: CShrMemList::CShrMemList
	  FAULT ->6098c555 ff4004           inc     dword ptr [eax+0x4]
	  ds:0068e922=????????
	
	CAUSE
	=====
	
	Under certain timing conditions, a Manage object is deleted while it is still
	being used by another thread, leading to an access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When this access violation occurs, the stack back trace may look like the
	following:
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0131fdac 60983c9c 00000000 00000001 0036d460 0036e370
	     mngbase!CShrMemList::CShrMemList
	  0131fdd0 01002dfe 0131fe2c 00008019 0d540018 0d552df8
	     mngbase!CManage::GetUseCount
	  0131fdf8 01003522 002e17e0 0036d460 0d540018 0000000a
	     mngagent!CStdAgentProxy::SendCreate
	  0131fe2c 0100cc0a 00000c96 0d549618 609829d0 003723c0
	     mngagent!CStdAgentProxy::SendPendingUse
	  0131fe64 01001e9c 00000000 0d549618 00372400 0036d7e0
	     mngagent!CAgtPxyRecExchange::SendModifyUse
	  0131fe8c 6098b267 0131fe9c 00000002 003723c0 00000c96
	     mngagent!CStdAgentProxy::OnModify
	  0131fea8 01008c95 61490c40 00000000 0121ffb8 77fa1773
	     mngbase!CNotifyQueue::Dispatch
	  0131ffb8 77f46c2e 0121ffb8 61490c40 00000000 0121ffb8
	     mngagent!DoAgentProxy
	  61490c40 1274c085 7401f883 02f8831a 01b85a74 c2000000
	     kernel32!BaseThreadStart
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
