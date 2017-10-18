---
layout: page
title: "Q248837: FIX: AV in VBA6.DLL During Compilation When Using SP3 Version"
permalink: kb/248/Q248837/
---

## Q248837: FIX: AV in VBA6.DLL During Compilation When Using SP3 Version

	Article: Q248837
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading from Visual Basic version 6.0 in Microsoft Visual Studio 6.0
	Service Pack 2 to Service Pack 3, certain projects may cause Access Violations
	in VBA6.dll file during the compilation process with registers and the stack
	resembling the following:
	== Registers ==
	EAX=00007ffe EBX=00194dd4 ECX=02c20000 EDX=00000000 ESI=000000d9
	EDI=00000000 EIP=0fac0324 ESP=0012f3d0 EBP=0012f408 EFL=00000203
	CS=001b DS=0023 ES=0023 SS=0023 FS=003b GS=0000
	== Stack with VBA6 symbols ==
	0012f3d0 0fad7e5e VBA6!DYN_BINDNAME_TABLE::GetBucketOfHlnam+0x20
	0012f408 0fad7cf2 VBA6!DYN_BINDNAME_TABLE::TraverseDefnList+0x5e
	0012f41c 0fad7c69 VBA6!DYN_BINDNAME_TABLE::BuildTable+0x82
	0012f420 0fad6f8e VBA6!DYN_TYPEBIND::BuildBindNameTable+0x8
	0012f43c 0fab5ebb VBA6!DYN_TYPEMEMBERS::BuildBindNameTable+0x59
	0012f45c 0fbadc9e VBA6!BASIC_TYPEROOT::EnsureInSemiDeclaredState+0x131
	0012f494 0fb3081f VBA6!NPANE::ValidateEventSrcTable+0x10
	0012f4b0 0fa9e3bd 0x0fb3081f
	0012f494 0fb3081f 0x0fa9e3bd
	0012f4b0 0fa9e3bd 0x0fb3081f
	0012f4cc 0fa96f87 0x0fa9e3bd
	0012f4d8 0fa96f24 0x0fa96f87
	0012f4e4 0fa9debb VBA6!EndEditXact+0x13
	0012f4f0 0fbcbfa1 VBA6!CPANE::EndEditXact+0xd
	0012f50c 0fbbfa26 VBA6!CPANE::SetSelection+0x6b({...}, {...})
	0012f538 0fbbf9b3 VBA6!VIEWMGR::ShowLines+0x48
	0012f55c 0fbc4eaa VBA6!VIEWMGR::ShowLogLine+0x2f
	0012f5bc 0fbc4bae VBA6!ShowCompileError+0x11d
	0012f5c0 004f7434 0x0fbc4bae
	0012f61c 004a517f VB6!ShowVbaError+0x5a
	0012f63c 00458ac6 0x004a517f
	0012f650 0056f874 VB6!Error+0x20
	0012fc50 0050f4a8 VB6!ExeMake+0x4bd
	0012fd84 004d2f76 0x0050f4a8
	0012fe2c 77e71268 0x004d2f76
	0012fe50 77e7203a USER32!DispatchMessageWorker+0xa3
	0012fe94 0040b496 USER32!GetWindowData+0x157
	0012fed8 3078d224 VB6!CMsoCMHandler__FPushMessageLoop+0x19
	0012fed8 3078d224 0x3078d224
	306c32f0 306c3498 0x3078d224
	307fc6a7 0824448b 0x306c3498
	0c2474ff 00000000 0x0824448b
	== Stack without VBA6 symbols ==
	0012f3d0 0fad7e5e 0x0fac0324
	0012f408 0fad7cf2 0x0fad7e5e
	0012f41c 0fad7c69 0x0fad7cf2
	0012f420 0fad6f8e 0x0fad7c69
	0012f43c 0fab5ebb 0x0fad6f8e
	0012f45c 0fbadc9e 0x0fab5ebb
	0012f494 0fb3081f 0x0fbadc9e
	0012f4b0 0fa9e3bd 0x0fb3081f
	0012f494 0fb3081f 0x0fa9e3bd
	0012f4b0 0fa9e3bd 0x0fb3081f
	0012f4cc 0fa96f87 0x0fa9e3bd
	0012f4d8 0fa96f24 0x0fa96f87
	0012f4e4 0fa9debb 0x0fa96f24
	0012f4f0 0fbcbfa1 0x0fa9debb
	0012f50c 0fbbfa26 0x0fbcbfa1
	0012f538 0fbbf9b3 0x0fbbfa26
	0012f55c 0fbc4eaa 0x0fbbf9b3
	0012f5bc 0fbc4bae 0x0fbc4eaa
	0012f5c0 004f7434 0x0fbc4bae
	0012f61c 004a517f VB6!ShowVbaError+0x5a
	0012f63c 00458ac6 0x004a517f
	0012f650 0056f874 VB6!Error+0x20
	0012fc50 0050f4a8 VB6!ExeMake+0x4bd
	0012fd84 004d2f76 0x0050f4a8
	0012fe2c 77e71268 0x004d2f76
	0012fe50 77e7203a USER32!DispatchMessageWorker+0xa3
	0012fe94 0040b496 USER32!GetWindowData+0x157
	0012fed8 3078d224 VB6!CMsoCMHandler__FPushMessageLoop+0x19
	0012fed8 3078d224 0x3078d224
	306c32f0 306c3498 0x3078d224
	307fc6a7 0824448b 0x306c3498
	0c2474ff 00000000 0x0824448b
	
	Because this problem only occurs at design time during the compilation process,
	you can rename the SP3 version of VBA6.dll in the Drive:\Program Files\Microsoft
	Visual Studio\VB98 folder and copy the SP2 version into the same location if you
	need to compile your project. You should get the SP3 version back when you
	package your project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	REFERENCES
	==========
	
	VBA6
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
