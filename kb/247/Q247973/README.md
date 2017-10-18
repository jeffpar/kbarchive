---
layout: page
title: "Q247973: PRB: Missing Oracle File SQLNET.ora May Cause Access Violation"
permalink: kb/247/Q247973/
---

## Q247973: PRB: Missing Oracle File SQLNET.ora May Cause Access Violation

	Article: Q247973
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.73.7269,Bu
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202 
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	When using the pre-MDAC 2.5 Microsoft Oracle ODBC Driver with Oracle 8i, an
	access violation (AV) with the following call stack may occur under stress:
	
	  ChildEBP RetAddr Args to Child
	  078ebdb8 0564016f 00005420 00280910 00000000 oran8!nnfgrne+0x54a(FPO:
	  [Non-Fpo]
	  078ec410 056ded02 05655420 078ee62c 00000016 oranl8!nlolgobj+0x6df(FPO:
	  [Non-Fpo]
	  078ec450 05684b90 05655420 078ee62c 0027feb0 oran8!snzutmts_tostr+0xde42(FPO:
	  [Non-Fpo]
	  078ec480 056769b2 05655420 078ee62c 000000ff oran8!nnfsn2a+0x30(FPO:
	  [Non-Fpo]
	  078ed5f8 056cf4b4 05655420 00001803 078ee62c oran8!niqname+0x252(FPO:
	  [Non-Fpo]
	  078ef764 05414c57 078ee62c 00000010 00001803 oran8!osncon+0x254(FPO:
	  [Non-Fpo]
	  078ef944 0541217e 0127a104 05223d20 00000014 ORACLIENT8!xupiulf+0x16427(FPO:
	  [Non-Fpo]
	  078ef968 054121ca 052258d0 05223d20 00000014 ORACLIENT8!xupiulf+0x1394e(FPO:
	  [Non-Fpo]
	  078ef984 054182f1 052258d0 05223d20 00000014 ORACLIENT8!xupiulf+0x1399a(FPO:
	  [Non-Fpo]
	  078efe3c 05419298 052258d0 05226ed8 00000003 ORACLIENT8!xupiulf+0x19ac1(FPO:
	  [Non-Fpo]
	  078efe7c 053ed8c4 052258d0 05226ed8 ffffffff ORACLIENT8!xupiulf+0x1aa68(FPO:
	  [Non-Fpo]
	  078efeb4 053ec8a0 052258d0 05226ed8 ffffffff ORACLIENT8!upilog+0x64(FPO:
	  [Non-Fpo]
	  078efee8 10002642 05226178 052258d0 05226ed8 ORACLIENT8!ocirlo+0xb0(FPO:
	  [Non-Fpo]
	  078eff48 1f579b69 00000013 00000009 0782f1b4 OCIW32!olog+0x62(FPO: [Non-Fpo]
	  078eff84 7800265a 052251f0 005c0042 0782f110
	  msdaora!DllGetClassObject+0xe35(FPO: [Non-Fpo]
	  078effb8 77f04ee8 0027ef40 005c0042 0782f110 MSVCRT!beginthreadex+0xb2(FPO:
	  [Non-Fpo]
	  078effec 00000000 780025ff 0027ef40 00000000 KERNEL32!lstrcmpiW+0xbe(FPO:
	  [Non-Fpo]
	
	RESOLUTION
	==========
	
	To resolve this problem, use either an Oracle-recommended ODBC driver that is
	compatible with Oracle 8i or the Microsoft Oracle ODBC driver found in MDAC 2.5
	and later, and make sure that the Oracle SQLNET.ora file is installed.
	
	MORE INFORMATION
	================
	
	Using the Microsoft ODBC Driver for Oracle build (2.573.4202 and earlier) with
	Oracle 8i is neither supported nor recommended.
	
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q239719 INFO: Support Limits of MS Oracle ODBC Driver/OLEDB Provider
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle273728301 kbODBCOracle2737356 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbprb
	
	=============================================================================
	
