---
layout: page
title: "Q76093: CONN: MAPPINGS.TXT File for MS Mail Connection Version 1.0"
permalink: kb/076/Q76093/
---

## Q76093: CONN: MAPPINGS.TXT File for MS Mail Connection Version 1.0

	Article: Q76093
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a listing of the MAPPINGS.TXT file, which is located in the
	MSGATE directory in the Connection store:
	
	NOTE: The pound sign (#) indicates lines that are comments in the actual
	MAPPINGS.TXT file.
	
	  # MS Mail Connection Attachment Mapping File
	  #
	  # This section specifies the Type and Creator which should be
	  # assigned to attachments sent from PC Mail to AppleTalk Mail.
	  # It also specifies the type of character set conversion to
	  # be performed on text attachments sent from the Mac to the PC.
	  #
	  # Format is ".EXT=Comment:Type:Creator:Kind"
	  #   .EXT is the DOS extension
	  #   Comment can be any text except newline and :
	  #   Type is the Mac file type (0-4 characters)
	  #   Creator is the Mac file creator (0-4 characters)
	  #   Kind can be Text, Binary, or ANSI
	  #    Text indicates the file should be converted between
	  #     the Mac and PC codepage 850 character sets.
	  #    ANSI indicates the file should be converted between
	  #     the Mac and ANSI character sets.
	  #    Binary indicates the file should not be converted.
	  #
	  # Don't forget the '.' before the extension.
	  # Blank lines are ignored
	
	  .TXT=Text file -> Microsoft Word:TEXT:MSWD:Text
	  .SIT=StuffIt file:SIT!:SIT!:Binary
	  .HQX=BinHex file:TEXT:BnHq:Text
	  .BAT=Batch file -> Microsoft Word:TEXT:MSWD:Text
	  .DOC=Microsoft Word:TEXT:MSWD:Binary
	  .XLS=Microsoft Excel 3:XLS3:XCEL:Binary
	  .XLC=Microsoft Excel Chart:XLC3:XCEL:Binary
	  .XLM=Microsoft Excel Macro:XLM3:XCEL:Binary
	  .XLW=Microsoft Excel Workspace:XLW3:XCEL:Binary
	  .XLA=Microsoft Excel Add-in:XLA :XCEL:Binary
	  .XLT=Microsoft Excel Template:sLM3:XCEL:Binary
	  .SLK=Microsoft Multiplan:TEXT:XCEL:Text
	  .WKS=Lotus 1-2-3 1.x -> Microsoft Excel:TEXT:XCEL:Text
	  .WK1=Lotus 1-2-3 2.x -> Microsoft Excel:TEXT:XCEL:Text
	  .WK3=Lotus 1-2-3 3.x -> Microsoft Excel:TEXT:XCEL:Text
	  .CSV=Comma Separated Values:TEXT:XCEL:Text
	  .DIF=Visicalc (DIF) -> Microsoft Excel:TEXT:XCEL:Text
	  .WRD=Microsoft Wor Text Document:TEXT:MSWD:Text
	  .RTF=Rich Text file -> Microsoft Word:TEXT:MSWD:Text
	  .STY=Microsoft Word Style Sheet:TEXT:MSWD:Text
	  .GLY=Microsoft Word Glossary:TEXT:MSWD:Text
	  .MPP=Windows Project:MPP :MSPJ:Binary
	  .MPX=Windows Project Exchange:MPX :MSPJ:Text
	  .MPC=Windows Project Calendar:MPC :MSPJ:Binary
	  .MPV=Windows Project View:MPV :MSPJ:Binary
	  .MPW=Windows Project Workspace:MPW :MSPJ:Binary
	  .PM3=Windows Pagemaker 3.0 Publication:ALB3:ALD3:Binary
	  .PT3=Windows Pagemaker 3.0 Template:ALT3:ALD3:Binary
	  .PUB=Windows Pagemaker 2.0 Publication:PUBF:ALD2:Binary
	  .RDY=Symantec Ready-> More:TEXT:More:Text
	  .DBF=DBASE -> FoxBASE/Plus:F+DB:FOX+:Binary
	
	  .C=C source file -> MPW:TEXT:MPS :Text
	  .H=C source header file -> MPW:TEXT:MPS :Text
	  .R=resource compiler source file -> MPW:TEXT:MPS :Text
	
	MORE INFORMATION
	================
	
	If a file type IS NOT TO BE CONVERTED, then the mapping line for that type
	should have its "Kind" field set to "Binary" (without the quotation marks) (not
	TEXT or ANSI).
	
	For example, when you attempt to transfer Adobe Acrobat files through the
	gateway, the line should be:
	
	     .PDF=Acrobat:TEXT:CARO:Binary
	
	If the line is set to anything else, such as the following
	
	     .PDF=Acrobat:TEXT:CARO:Text
	
	then you will get the following error message whenever you try to read the file
	on the receiving end:
	
	  Rebuilding Damaged File
	
	In addition, the listings for the Lotus 1-2-3 files are all incorrect in the
	original MAPPINGS.TXT file. Each line should end in Binary, rather than Text, as
	follows:
	
	     .WKS=Lotus 1-2-3 1.x -> Microsoft Excel:TEXT:XCEL:Binary
	     .WK1=Lotus 1-2-3 2.x -> Microsoft Excel:TEXT:XCEL:Binary
	     .WK3=Lotus 1-2-3 3.x -> Microsoft Excel:TEXT:XCEL:Binary
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100
	Version           : :1.0
	
	=============================================================================
	
