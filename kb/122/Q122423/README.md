---
layout: page
title: "Q122423: Mac RSC: Remote Server Connection-ARA 2.0 Compatibility Patch"
permalink: /kb/122/Q122423/
---

## Q122423: Mac RSC: Remote Server Connection-ARA 2.0 Compatibility Patch

{% raw %}

	Article: Q122423
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a patch that fixes a compatibility problem that exists
	between Remote Server Connection and Apple Remote Access (ARA) version 2.0. In
	order to use Remote Server Connection with ARA 2.0, you must run the patch
	program to update the Mail server.
	
	For complete information about obtaining and running the patch program file, see
	the following sections:
	
	- To download the patch program
	
	- To run the patch program
	
	MORE INFORMATION
	================
	
	This patch program is for use with version 3.1d of Microsoft Mail for AppleTalk
	Networks. This patch program fixes a compatibility problem that exists between
	Remote Server Connection and Apple Remote Access (ARA) version 2.0. In order to
	use Remote Server Connection with ARA 2.0, you must run the patch program to
	update the Mail server.
	
	  NOTE: If you do not plan to use Remote Server Connection with ARA 2.0, this
	  patch is not necessary. No other changes to the Mail Server are made by this
	  patch.
	
	To download the patch program
	-----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Rscpat.hqx
	
	Release Date: Aug-11-1994
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	You should receive the following files:
	
	Mail 3.1d Application Patch (24,321 bytes, dated 08-11-94, 2:22 P.M.)
	Mail 3.1d INIT Patch (24,321 bytes, dated 08-11-94, 2:21 P.M.)
	README.TXT
	
	To run the patch program
	------------------------
	
	NOTE: The Remote Server Connection--ARA 2.0 patch program is in a self-
	extracting archive (.SEA) format as well as in Bin-Hex (.HQX) format to allow
	you to use an MS-DOS-formatted disk. To access the workstation software, you
	need to decode the file using a decoding utility, such as StuffIt or Compact
	Pro. These utilities can be found on most major bulletin boards, such as America
	Online and AppleLink.
	
	This patch was designed to update version 3.1d of the Mail server. If you have an
	earlier version of Mail, you must upgrade to 3.1d before you run this patch.
	
	1. If you download RSCPAT.SEA, go to step 2.
	
	  If you download the .HQX file, use one of the decoding utilities, such as
	  StuffIt or Compact Pro, to decode the file into its original format by doing
	  the following:
	
	   - To use StuffIt: From the Other menu, choose Bin-Hex. Then select Decode
	     Bin-Hex File.
	
	  -or-
	
	   - To use Compact Pro: From the Misc menu, choose Convert FROM BinHex4.
	
	  The utility will generate a Macintosh file called RSCPAT.SEA in the same
	  location as the original file.
	
	2. Double-click the RSCPAT.SEA to extract the Macintosh file.
	
	3. While holding down the M key, restart the Mail server.
	
	  NOTE: This prevents the Mail server from loading.
	
	4. If you are running your server as an Application, double-click the Mail 3.1d
	  Application Patch icon. If your server is running as an INIT, double-click
	  the Mail 3.1d INIT Patch icon.
	
	  NOTE: The default for the Mail server is to run as an INIT. If you have not
	  converted your server to an Application using Mail Tools, then it is running
	  as an INIT.
	
	5. Read the information displayed and click OK.
	
	6. When you are prompted to "Please Locate the Microsoft Mail Server," select
	  the Mail server and choose Patch. The patch will run and update the Mail
	  server. It will not affect any other parts of the server or the Microsoft
	  Mail Data file.
	
	7. Restart the Macintosh to enable the Mail server.
	
	  NOTE: Although this patch addresses compatibility issues with ARA 2.0, version
	  3.1d of Mail for AppleTalk Networks is not designed to take advantage of the
	  new DialAssist feature in ARA 2.0. Any additional information entered in the
	  DialAssist Control Panel will be ignored when Remote Server Connection
	  connects to a remote site.
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	

{% endraw %}
