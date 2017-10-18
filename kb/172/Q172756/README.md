---
layout: page
title: "Q172756: DocErr: In Readme.txt in &#92;Perl Folder of NT 4.0 ResKit"
permalink: kb/172/Q172756/
---

## Q172756: DocErr: In Readme.txt in &#92;Perl Folder of NT 4.0 ResKit

	Article: Q172756
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article summarizes multiple errors in the Readme.txt files in these
	folders:
	
	  \Common\Common\Perl\Readme.txt
	  \Source\Gnu\Perl\Readme.txt
	
	MORE INFORMATION
	================
	
	NTPerl5.htm Referenced in Readme.txt
	------------------------------------
	
	The following text appears in the Readme.txt files listed above:
	
	  The entire Perl 5 manual can be viewed with your WWW browser of choice (i.e.
	  Netscape) by opening the file "NTPERL5.HTM" in the 'html-docs' directory.
	
	NTPerl5.htm was not included on the Microsoft Windows NT 4.0 Resource Kit
	CD-ROM.
	
	NTPerl5.htm was included on the "Microsoft Windows NT 3.51 Resource Kit Update
	Volume 2" CD-ROM, but was dropped from subsequent releases of the Microsoft
	Windows NT Resource Kit.
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	Invalid FTP Site Cited In Readme.txt
	------------------------------------
	
	The following text appears in the Readme.txt files listed above:
	
	  The release version of Perl for Win32 will be available from from
	  ftp://ftp.microsoft.com/ [TBD: subdir, please?]
	
	
	This is not a valid FTP site address. The source code for Perl is not available
	from the Microsoft FTP site. Instead, the source code is available on the CD-ROM
	included with the products listed at the beginning of this article. The source
	code can be found in the following folder:
	
	  \Source\Gnu\Perl\
	
	The Perl source code is also available from the following World Wide Web site:
	
	  http://www.activeware.com
	
	NOTE: this site is not under the control of Microsoft and may change without
	notice. For Microsoft's official statement regarding other servers, please see
	the following World Wide Web site:
	
	  http://www.microsoft.com/misc/nonms.htm
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	Additional query words: mspress ms_press press ntrk ntreskit 1-57231-344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Solution Type     : kbpending
	
	=============================================================================
	
