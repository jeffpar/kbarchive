---
layout: page
title: "Q103800: MHS: INPOST.EXE Strips Local User Aliases from To: Line"
permalink: /kb/103/Q103800/
---

## Q103800: MHS: INPOST.EXE Strips Local User Aliases from To: Line

	Article: Q103800
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft Mail for PC Networks user composes mail to multiple user types
	(local postoffice users and MHS users), the Inpost program (INPOST.EXE)
	correctly routes mail to MHS. However, when the MHS users receive the mail, they
	do not see any of the local users in the To: field, they see only the MHS type
	users in this field.
	
	CAUSE
	=====
	
	In keeping with Standard Message Format (SMF) 64, 70, and 71 specification, the
	To: field is a text field that contains a list of recipient names. (It is the
	12th field from the top when you specify the -h option on the command line to
	activate header information.) However, because the SMF specification does not
	require that local aliases be retained, the Microsoft Mail Gateway to MHS does
	not retain this information.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name    Version
	  --------------------
	  Inpost.exe   3.0.10
	
	This hotfix has been posted to the following Internet location as Mhsgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to MHS
	version 3.0.
	
	MORE INFORMATION
	================
	
	The message below originally had a total of four recipients: two Microsoft local
	users and two MHS users. However, MHS (INPOST.EXE) has removed the Microsoft
	local users from the To: field.
	
	  Send-to: admin @ CHIMHS,
	   andy @ chimhs
	  Hop-count: 1
	  Sender: andy@chimhs {MAIL32/CHICAGO/andy}
	  Message-encoding: IBM-437
	  MCB-options: NNYOANA
	  MCB-type: 0
	  Date-posted: 25-May-93 11:16:18
	  SMF-version: 70
	  Error-report: 0
	  MHS-id: 43FA012C8117D4D1
	  From: andy@chimhs {MAIL32/CHICAGO/andy}
	  >>>     To: admin@CHIMHS,
	     andy@chimhs
	  Subject: Multi Test # 2
	  Date: 25-May-93 09:40
	  Importance: Low
	  Message-id: 45FA012C8117D4D1
	  Via-host: Hometown.Hometown
	
	
	Additional query words: 3.00 Standard Message Format
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
