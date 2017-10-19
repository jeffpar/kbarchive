---
layout: page
title: "Q86625: PC Adm: Err Msg: This Post Office Is a Hub for Other..."
permalink: /kb/086/Q86625/
---

## Q86625: PC Adm: Err Msg: This Post Office Is a Hub for Other...

	Article: Q86625
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 2.1 or 3.0 of Microsoft Mail for PC Networks, when you delete an
	externally defined postoffice with the Mail Administrator program (ADMIN.EXE),
	the following error may occur:
	
	  Notice 53
	  This Post office is a hub for other post offices.
	
	This error will occur when the internal counter of indirect postoffice
	connections is greater than 0 (zero). This value is stored with the external
	postoffice configuration.
	
	CAUSE
	=====
	
	There are two probable reasons this error will occur when trying to delete a
	postoffice:
	
	1. This postoffice is a hub for postoffice(s). This can be confirmed by creating
	  a report from the ADMIN.EXE program. From the main menu, select External
	  Admin, Report, Setup, All Post Offices, then print either to a printer or to
	  a file. This file will show whether any of the externally defined postoffices
	  are linked via indirect. These links need to be removed before the hub
	  postoffice can be deleted or modified.
	
	2. The .XTN file has a bad value in the internal counter for indirect
	  postoffices. The .XTN file will be preceded by an eight-digit hexadecimal
	  number such as 000000AB.XTN. The file must be manually corrected using the
	  following process:
	
	  a. Obtain the network and postoffice names of the suspected postoffice.
	
	  b. Type out the NETWORK.GLB file that is located within the GLB directory of
	     the postoffice. This file is not encrypted and is not formatted.
	
	  c. Look for the network name of the problem postoffice and write down the
	     eight-digit number that follows it. This is the ID of this network's
	     associated .XTN file. Make two copies of this file (for example,
	     XXXXXXXX.BAK and XXXXXXXX.TMP).
	
	3. Use DEBUG on the .TMP file to find the affected postoffice and zero the
	  indirect PO counter.
	
	  The first defined postoffice name will appear at byte offset 101, and the
	  associated location of the indirect postoffice counter will be at 389. These
	  values are offset by 2BAh and 698 (decimal).
	
	  The following chart details the first 20 possible file positions for
	  postoffice names, the associated delete bit, and indirect PO counter
	  locations.
	
	     Delete Bit   Postoffice Name   Indirect PO Counter
	     ---------------------------------------------------------------
	
	       100            101                 389
	       3BA            3BB                 643
	       674            675                 8FD
	       92E            92F                 BB7
	       BE8            BE9                 E71
	       EA2            EA3                 112B
	       115C           115D                13E5
	       1416           1417                169F
	       16D0           16D1                1959
	       198A           198B                1C13
	       1C44           1C45                1ECD
	       1EFE           1EFF                2187
	       21B8           21B9                2441
	       2472           2473                26FB
	       272C           272D                29B5
	       29E6           29E7                2C6F
	       2CA0           2CA1                2F29
	       2F5A           2F5B                31E3
	       3214           3215                349D
	       34CE           34CF                3757
	
	4. Open the temporary XXXXXXXX.TMP file in DEBUG. (Note: The DEBUG command
	  prompt is a hyphen). For example, type:
	
	  "debug 00000009.tmp" (without the quotation marks)
	
	5. At the hyphen (-) prompt, type D100 and press ENTER to get the name of the
	  first postoffice in the file preceded by a one-byte delete code. If the
	  delete code is 01 and the postoffice name is the one you want, you are
	  viewing the correct record and you should go to step g.
	
	  If the postoffice name is not correct or the delete code is 00 (indicating a
	  previously deleted record), repeat step f using the next row in the table
	  (-D3BA, -D674, -D92E, and so on) until you find the affected record.
	
	6. Once you have found the affected postoffice record, type in Exxx of the
	  associated value in the Indirect PO Counter column above. This value will be
	  greater than 00 and will need to be reset. For example:
	
	  "-E389
	
	  xxxx:0389 01." (without the quotation marks)
	
	7. After the period (.), type in 00 00 (zero zero space zero zero) and press
	  ENTER. This will null bytes 389H and 38AH, which hold the indirect postoffice
	  count. Now press W, ENTER (write to disk) and Q, ENTER, to quit DEBUG.
	
	8. Copy the debugged XXXXXXXX.TMP file over the XXXXXXXX.XTN file. Then use the
	  ADMIN.EXE program to delete the external postoffice definition.
	
	  NOTE: If something went wrong and this didn't work, copy your XXXXXXXX.BAK
	  file over your new XXXXXXXX.XTN file to restore it to its previous state.
	
	Additional query words: 2.10 3.00 3.20 external notice 53 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
