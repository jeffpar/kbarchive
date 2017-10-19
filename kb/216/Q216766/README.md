---
layout: page
title: "Q216766: FIX: Windows NT 4.0 w/ SP4 Causes Data Corruption in RPC Calls"
permalink: /kb/216/Q216766/
---

## Q216766: FIX: Windows NT 4.0 w/ SP4 Causes Data Corruption in RPC Calls

	Article: Q216766
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbRPC kbOSWinNT400sp4bug kbOSWinNT400sp4fix kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a pointer to conformant structure as a field of a complex structure
	under Windows NT 4.0 with Service Pack 4 (SP4), the unmarshaling side gets
	uninitialized data. If such a data structure is an [in] parameter, the server
	manager routine sees the corruption. If it is an [out] parameter the corruption,
	the client sees the corruption.
	
	The same problem appears if your RPC application is running on Windows 95 with
	DCOM95 1.2 update or Windows 98 with DCOM98 update as documented in the
	following article in the Microsoft Knowledge Base:
	
	  Q216889 FIX: DCOM95 1.2 or DCOM98 Causes Data Corruption in RPC Calls
	
	Data Structure:
	
	  typedef struct tagConformantStruct 
	  {
	     unsigned long        size;
	     [size_is(size)] char data[];
	  } ConformantStruct;
	
	  typedef enum tagColor
	  {
	     Red, Blue, Green
	  } Color;
	
	  typedef union tagMyUnion switch (Color type) u
	  {
	     case Red :  long  longArm;
	     case Blue:  short shortArm;
	     case Green: char  charArm;
	  } MyUnion;
	
	  typedef struct tagComplexStruct
	  {
	     unsigned long numUnions;
	     ConformantStruct* pConfStruct; // PROBLEM! pointer to conformant struct.
	     [size_is(numUnions)] MyUnion myUnions[]; // Makes the struct complex.
	  } ComplexStruct;
	
	CAUSE
	=====
	
	A defect in the rpcrt4.dll that is shipped with Windows Service Pack 4 (DCOM95
	1.2) and DCOM98 prevents the conformant part of the conformant structure to be
	marshaled. The unmarshaling side expects the conformant part and unmarshals from
	a possibly uninitialized part of the RPC buffer. This causes data corruption.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Service Pack 4
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4. This problem
	was first corrected in Windows NT version 4.0 Service Pack 5 and Windows NT
	Server 4.0, Terminal Server Edition Service Pack 5.
	
	Additional query words: 4.00 conformant complex wts tse
	
	======================================================================
	Keywords          : kbRPC kbOSWinNT400sp4bug kbOSWinNT400sp4fix kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
