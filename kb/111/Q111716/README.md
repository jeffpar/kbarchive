---
layout: page
title: "Q111716: How to Obtain the WinWord Converter SDK (GC1039)"
permalink: /kb/111/Q111716/
---

## Q111716: How to Obtain the WinWord Converter SDK (GC1039)

{% raw %}

	Article: Q111716
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Software Development Kit, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Software Development Kit (SDK) for 16-Bit and 32-Bit External Text File
	Converters is available as Application Note GC1039.
	
	IMPORTANT: Microsoft does not offer this kit as part of our product line.
	Microsoft will not provide technical or any other type of support for this kit.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Gc1039.exe (
	  http://download.microsoft.com/download/word60win/spec/2.1/WIN98/EN-US/Gc1039.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	THE TEXT OF GC1039
	------------------
	
	Microsoft(R) MS-DOS(R), Windows(R), Windows NT(R), (R) Windows 95, OS/2,
	and Apple Macintosh Applications
	
	Versions:  3.0
	
	Subject:   Software Development Kit (SDK) for       Application Note
	         External Text File Converters
	
	Contents:  2 Pages, 1 Disk                          4/97  GC1039
	
	The files included with this Application Note comprise the software
	development kit (SDK) for 16-bit and 32-bit external text file converters.
	This SDK provides the technical information you need in order to develop
	external file converters that can import and export formatted text between
	Microsoft Word for Windows and foreign binary files.
	
	  Important: Microsoft does not offer this kit as part of our product
	  line. Microsoft will not provide technical or any other type of support
	  for this kit.
	
	The kit contains the following components:
	
	- Microsoft License Agreement (Sdklics.doc) IMPORTANT-- READ CAREFULLY
	  BEFORE USING SOFTWARE PACKET(S). By using the software in this kit, you
	  indicate your acceptance of the Microsoft License Agreement included
	  with it.
	
	- Rich Text Format (RTF) Specification (GC0165.doc) The RTF Specification
	  document is the core material you need to write external file
	  converters. This document describes RTF syntax, the semantics of an RTF
	  reader, and the contents of an RTF file, including definitions of RTF
	  keywords.
	
	- Software Development Kit for External Text File Converters and Win32(R)
	  Software Development Kit for External Text File Converters documents
	  (Sdk.doc and Sdk32.doc) These documents provide specifications and
	  examples of how an external text file converter works with Word and
	  Windows. Sdk.doc details the creation of a 16-bit converter, and
	  Sdk32.doc details the creation of a 32-bit converter. Header files
	  (Codepage.h, Convapi.h, Converr.h, Lang.h, Rtfdefs.h) These header files
	  define all the structures, types, and function entry points documented
	  in the SDK documents. Any converter or converter client should include
	  the Convapi.h header, which itself includes Converr.h. The other files
	  (Codepage.h, Lang.h, and Rtfdefs.h) contain definitions from the RTF
	  specification. You can use the definitions found in these files to
	  interpret the arguments for RTF keywords.
	
	- Sample converter sources (See the Sampcnv and Rtfread subdirectories)
	  Refer to these sources to see an example of a simple text converter. The
	  sample converter sources are intended for use with Microsoft C version
	  8.0. The Makefile file contains instructions for building the sample
	  converter. The sample converter reads and writes simple text files, is
	  auto-installed into Word, and contains the minimal code needed to write
	  a fully functional converter. It implements the InitConverter,
	  IsFormatCorrect, ForeignToRtf, RtfToForeign, and GetIniEntry application
	  program interface (API) functions. The Rtfread directory contains source
	  code for a skeleton RTF reader. The Readme.txt file in each directory
	  elaborates on how to build the samples on 16-bit and 32-bit Windows.
	
	                                 #######
	
	The disk and software contained on it, including any accompanying
	documentation (the "Software"), are provided to you at no additional
	charge. Microsoft Corporation owns all rights, title, and interest in and
	to the Software. The user assumes the entire risk as to the accuracy and
	the use of the Software.
	
	COPYRIGHT NOTICE. Copyright (c) 1993-1997 Microsoft Corporation. Microsoft
	and/or its suppliers, One Microsoft Way, Redmond, Washington 98052-6399
	U.S.A. All rights reserved.
	
	TRADEMARKS. Microsoft, MS, MS-DOS, Win32, Windows, and Windows NT are
	registered trademarks and MSN is a trademark of Microsoft Corportation.
	Other Microsoft products referenced herein are either trademarks or
	registered trademarks of Microsoft. Other product and company names
	mentioned herein may be the trademarks of their respective owners.
	
	The names of companies, products, people, characters and/or data mentioned
	herein are fictitious and are in no way intended to represent any real
	individual, company, product or event, unless otherwise noted.
	
	NO WARRANTY. THE SOFTWARE IS PROVIDED "AS-IS," WITHOUT WARRANTY OF ANY
	KIND, AND ANY USE OF THIS SOFTWARE PRODUCT IS AT YOUR OWN RISK. TO THE
	MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MICROSOFT AND ITS SUPPLIERS
	DISCLAIM ALL WARRANTIES AND CONDITIONS, EITHER EXPRESS OR IMPLIED,
	INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES AND CONDITIONS OF
	MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-
	INFRINGEMENT, WITH REGARD TO THE SOFTWARE.
	
	LIMITATION OF LIABILITY. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
	IN NO EVENT SHALL MICROSOFT OR ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL,
	INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING,
	WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS
	INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS)
	ARISING OUT OF THE USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF
	MICROSOFT HAS BEEN ADVISED OF THE POSSIBLITY OF SUCH DAMAGES.  BECAUSE SOME
	STATES AND JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
	LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY
	NOT APPLY.  MICROSOFT'S ENTIRE LIABILITY AND YOUR EXCLUSIVE REMEDY UNDER
	THIS EULA SHALL NOT EXCEED FIVE DOLLARS (US$5.00).
	
	The following conditions also apply to your use of the Software:
	
	The Software may be copied and distributed internally only, subject to the
	following conditions:
	
	All text must be copied without modification and all pages must be
	included; If software is included, all files on the disk(s) |must be copied
	without modification [the MS-DOS(R)(R) utility diskcopy is appropriate for
	this purpose]; All components of this Software must be distributed
	together; and This Software may not be distributed to any third party.
	
	If you are not a Microsoft Premier customer, Microsoft shall not provide
	technical support for this Software.
	
	The Software is provided with RESTRICTED RIGHTS.  Use, duplication, or
	disclosure by the Government is subject to restrictions set forth in
	subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer
	Software clause at DFARS 252.227-7013 or subparagraphs (c)(1) and (2) of
	the Commercial Computer Software-Restricted Rights at 48 CFR 52.227-19, as
	applicable.  Manufacturer is Microsoft Corporation, One Microsoft Way,
	Redmond, WA  98052-6399.  Any transfer of the Software must be accompanied
	by this statement and may only be transferred if first approved by
	Microsoft.
	
	You agree that you will not export or re-export the Software to any
	country, person, entity or end user subject to U.S.A. export restrictions,
	and you are responsible for complying with all applicable U.S. and local
	export laws in connection with the use of this Software.  You warrant and
	represent that neither the U.S.A. Bureau of Export Administration nor any
	other federal agency has suspended, revoked or denied you export
	privileges.
	
	This EULA is governed by the laws of the State of Washington, U.S.A.
	
	Additional query words: spec specs finding how access get developer developer's
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbAudDeveloper kbSDKSearch kbSDK210
	Version           : :2.1
	
	=============================================================================
	

{% endraw %}
