---
layout: page
title: "Q303686: XADM: Information Store Stops Responding in STORE!HrDecodeRTF"
permalink: /kb/303/Q303686/
---

## Q303686: XADM: Information Store Stops Responding in STORE!HrDecodeRTF

{% raw %}

	Article: Q303686
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During ordinary operation, the Exchange Server information store may stop
	unexpectedly with an access violation. If the correct Microsoft Windows NT and
	Exchange Server debug symbols are installed, the resulting Dr. Watson log may
	contain a stack dump that is similar to the following:
	
	  
	
	  ChildEBP RetAddr  Args to Child              
	  0b1cf430 0086a59d 096aa6d8 10090102 096aa808 store!HrDecodeRTF+0x291
	  0b1cf478 0086aa20 00000001 00000000 096aa6d8 store!HrDecodeMAPIProp+0xad
	  0b1cf4bc 0086ab58 00000000 0040c620 00000000 store!HrDecodePropVal+0x150
	  0b1cf51c 0086c52f 00000000 000004e8 00000000
	  store!HrDecodeEncapsulation+0xd8
	  0b1cf5e4 00854ac8 ffffffff 00000000 0040c620 store!HrExtractProperties+0x7af
	  0b1cf604 0082f45d 096c1780 00000002 0040c620 store!TNEF_ExtractProps+0x208
	  0b1cf64c 008448b1 096dae00 096db910 00000000 store!CmnBptMessage__hrExtractTNEF+0x1ad
	  0b1cf6a4 008177ec 096dae00 096db910 096d47f0
	  store!CmcvtrBptEnd__hrExtract+0x301
	  0b1cf6e0 008515b9 0b1cf6fc 00000000 0b1cf6fc store!CINETextr__hrExtract+0x16c
	  0b1cf700 008513ce 096f3138 000040c5 00401e78 store!CConvertStream__HrFlush+0x39
	  0b1cf730 005b342a 096c0bc8 00000000 0969f3c8 store!CConvertStream__Commit+0x9e
	  0b1cf750 005ace9b 00000000 00000000 00000000 store!CSTREAM__HrCommit+0x5a
	  0b1cf788 0045dcc9 0b1cf830 0969f3c8 0b1cf7a8 store!EcCommitStreamOp+0x10b
	  0b1cf7a0 0044fc60 00000001 00000028 0b1cf940 store!EcCommitStream+0x69
	  0b1cf8a8 00467e0d 0b1cf920 00004200 0b1cf940 store!EcRpc+0x1fe0
	  0b1cf93c 77e11dc7 0017a328 096f3138 00182f5e store!EcDoRpc+0xdd
	  0b1cf95c 77e56205 00467d30 0b1cfb50 00000004 RPCRT4!Invoke+0x28
	  0b1cf978 77e561d6 00467d30 0b1cfb50 00000004 RPCRT4!NdrCallServerManager+0x15
	  0b1cfc3c 77e55f3e 00000000 00000000 0b1cff28 RPCRT4!NdrStubCall+0x292
	  0b1cfc54 77e113a4 0b1cff28 0015d480 0b1cff28 RPCRT4!NdrServerCall+0x19
	
	CAUSE
	=====
	
	This problem can occur if the Exchange Server information store process
	(Store.exe) contains a logic error that causes the process to try to access a
	memory structure that has not yet been initialized. This problem can occur when
	the information store processes or converts an SMTP-based delivery report
	message.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2655.21 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: mailmarshal
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
