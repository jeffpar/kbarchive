---
layout: page
title: "Q179814: XADM: Dr Watson in Store in EcFormatMVString8"
permalink: /kb/179/Q179814/
---

## Q179814: XADM: Dr Watson in Store in EcFormatMVString8

{% raw %}

	Article: Q179814
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are receiving mail through the Microsoft Exchange Internet Mail
	Service, there may be a Dr. Watson error in the Information Store. The call
	stack may look like the following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0d55f3d0  00557a0c  00007fff 00000001 0e8701c8
	  STORE!EcFormatMVString8+0x33
	  0d55f3f8  00559a92  00007fff 0e8701c0 0d55f424 STORE!EcFormatValue+0x1fc
	  0d55f428  005597e4  00007fff 0000000d 00000028 STORE!EcFormatRow+0x132
	  0d55f4dc  004f3398  0dce3606 00000001 00000fad
	  STORE!EcFormatRecipientRow+0xb24
	  0d55f540  005d828c  00000001 00000001 0000000d
	  STORE!ORECIP::EcModifyRow+0x2d8
	  0d55f5dc  0060913e  00000fad 00000000 01379820
	  STORE!CVTRECIP::HrSetAdrlist+0x43c
	  0d55f614  006194a9  0dcf8b18 00000000 0e874230
	  STORE!CMAPIMessage::ModifyRecipients+0x1be
	  0d55f658  0061a193  000008a8 0d55f690 00000000
	  STORE!HrDecodeRecipTable+0x199
	  0d55f6bc  0060eb13  ffffffff 00000000 00405cf8
	  STORE!HrExtractProperties+0x473
	  0d55f6e0  005fc5d1  0dcf8b50 00000002 00405cf8
	  STORE!TNEF_ExtractProps+0x113
	  0d55f718  0060720c  0dcdf5d0 0dce91f0 00000000
	  STORE!CmnBptMessage::hrExtractTNEF+0x121
	  0d55f73c  005f0567  0dcdf5d0 00000000 0dce0195
	  STORE!CmcvtrBptEnd::hrExtract+0x1cc
	  0d55f76c  0060cb26  0dce0d24 000026c1 0d55f794
	  STORE!CINETextr::hrExtract+0xe7
	  0dcd5190  01363d10  00000001 00673398 0dcd5150
	  STORE!CConvertStream::Write+0xd6
	
	NOTE: The lines in this sample call stack have been wrapped for formatting
	purposes.
	
	CAUSE
	=====
	
	The Information Store does not handle the setting of multi-valued properties on
	the recipient table correctly. In ORECIP::EcModifyRow, when it converts the
	p-tags back to MAPI-style p-tags, the code does not check whether any of the
	text properties are multi-valued.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash down
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
