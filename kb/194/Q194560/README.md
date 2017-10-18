---
layout: page
title: "Q194560: XADM: Store Crashes while Processing Outbound SMTP Message"
permalink: kb/194/Q194560/
---

## Q194560: XADM: Store Crashes while Processing Outbound SMTP Message

	Article: Q194560
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may terminate unexpectedly while
	processing outbound SMTP messages. If the problem message exists in the MTS-OUT
	folder, the information store fails to convert the message, and terminates
	unexpectedly when you attempt to start the Internet Mail Service. Mdbvu32 can
	show the problem message remaining in the MTS-OUT folder.
	
	CAUSE
	=====
	
	In rich text format (RTF)-to-HTML conversion routines there are problems with
	the translation of hyperlinks if a message contains double-byte character set
	(DBCS) characters.
	
	WORKAROUND
	==========
	
	To work around this problem temporarily, do one of the following:
	
	- Use the Resource Kit utility, Imcsave, to remove the messages and save the
	  contents of the MTS-OUT folder.
	
	- Use Mdbvu32 to copy messages out of the MTS-OUT folder. Remove the first
	  message, and try to start the Internet Mail Service.
	
	In both cases, the information store and Internet Mail Service should work once
	the problem message has been removed.
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	    File Name    Version
	    ------------------------
	    Mdbmsg.dll   5.0.1461.72
	    Store.exe    5.0.1461.72
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	    File Name    Version
	    -----------------------
	    Gapi32.dll   5.5.2417.0
	    Mdbmsg.dll   5.5.2417.0
	    Store.exe    5.5.2417.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	MORE INFORMATION
	================
	
	The thread where the access violation occurred may look similar to this:
	
	  FramePtr  RetAddr   Function Name
	  07cff6dc  00623290  STORE!CchText+0x73
	  07cff700  004cff03  STORE!ScProcessField+0x3a0
	  07cff728  004ce7c3  STORE!RTFHTML::ScUnwindTokens+0x93
	  07cff748  004ce5c7  STORE!RTFHTML::ScPopRTFToken+0x93
	  07cff764  006180ce  STORE!RTFHTML::ScPushRTFToken+0x37
	  07cff788  006231d5  STORE!RTFHTML::ScNInterpret+0x4ae
	  07cff7b0  00617c4b  STORE!ScProcessField+0x2e5
	  07cff7d0  004ce58c  STORE!RTFHTML::ScNInterpret+0x2b
	  07cff7dc  004ccb83  STORE!RTFHTML::ScInterpret+0xc
	  07cff808  004db951  STORE!OUTPOP::Read+0x133
	  07cff82c  005f7e77  STORE!CINETemtr::hrPreviewBpt+0x31
	  07cff940  004da764  STORE!CINETemtr::HrOpenBodyStream+0x687
	  07cff97c  004deca2  STORE!CINETemtr::hrOpenBptStream+0x274
	  07cff9ac  0047d92b  STORE!CmcvtrBptText::hrEmit+0x52
	  07cff9d4  0047d820  STORE!CINETemtr::hrEmit+0xab
	  07cffa14  0047d71c  STORE!CConvertStream::Read+0xf0
	  07cffa38  0047d659  STORE!EcReadStreamOp+0x7c
	  07cffa5c  00413b17  STORE!EcReadStream+0x79
	  07cffaf0  0041334e  STORE!EcRpc+0x787
	  07cffb0c  77e11841  STORE!EcDoRpc+0x3e
	
	  STORE!CchText+0x73:
	  0x00610ef3  8a06             mov          al,byte ptr [esi]   <<< fault
	  0x00610ef5  50               push         eax
	  0x00610ef6  53               push         ebx
	  0x00610ef7  ff1594134000     call         dword ptr
	                                           [__imp__IsDBCSLeadByteEx@8
	                                            (00401394)]
	  0x00610efd  85c0             test         eax,eax
	  0x00610eff  7402             je           CchText+00000083 (00610f03)
	  0x00610f01  46               inc          esi
	  0x00610f02  4f               dec          edi
	
	Additional query words: drwtsn
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
