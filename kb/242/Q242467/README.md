---
layout: page
title: "Q242467: FIX: Dividing 0 by 0 Returns Garbage Chars or Incorrect Number"
permalink: kb/242/Q242467/
---

## Q242467: FIX: Dividing 0 by 0 Returns Garbage Chars or Incorrect Number

	Article: Q242467
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQL kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport kbSQ
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You perform a division where the divisor and dividend are both 0. The return
	value should be ******, but instead, a combination of ASCII characters or
	numerals and asterisks is returned. Additionally, if you perform such a
	calculation as a select item in a SQL SELECT statement, you might see an
	incorrect numeric return value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Simple Zero Division:
	
	1. Execute the following commands in the Command window:
	
	  lnX = 0/0
	  ?lnX
	
	2. Look at the return value printed to the desktop. Note that you see an
	  underscore or hyphen, followed by several garbage characters, followed by a
	  series of asterisks.
	
	Zero Division in SQL SELECT Statement:
	
	1. Run the following code from a program (.PRG) file:
	
	  CREATE CURSOR c1 (f1 n(5), f2 n(5), f3 N(5), f4 N(5))
	  INSERT INTO c1 VALUES (3,2,0,0)
	  SELECT f1/f2 as q1, f4/f3 AS q2;
	     FROM c1;
	     INTO CURSOR c2
	  BROWSE NOWAIT
	  ?q2
	
	2. The value appearing in the second column of the BROWSE window is
	  -.5000*****.**. Note that the return value printed to the desktop is -0.5000.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbSQL kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
