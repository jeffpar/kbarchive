---
layout: page
title: "Q194889: Sgcinst.exe is Available for Download"
permalink: /kb/194/Q194889/
---

## Q194889: Sgcinst.exe is Available for Download

	Article: Q194889
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sgcinst.exe is a command-line tool that is used when installing Server Gated
	Cryptography certificates into Microsoft Internet Information Server (IIS).
	Sgcinst.exe converts vendors' Server-Gated Cryptography certificates into a
	format that can be imported into IIS.
	
	Sgcinst.exe is available at the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/misc/sgcinst/
	
	MORE INFORMATION
	================
	
	Installing an SGC Certificate with current versions of IIS may require a two
	step process. Verisign and other Certificate Authorities (CAs) currently issuing
	server identification Certificates return the server Certificate as a base-64
	encoded x.509v3 Certificate. The released version of IIS Key Manager is designed
	to accept these and install them for IIS use.
	
	To more effectively control issuance of the SGC Certificates, Verisign has
	created an intermediate, or issuing, CA for SGC Certificates. This requires a
	Certificate chain be returned to the IIS computer. This chain includes both the
	SGC server Certificate and the intermediate CA Certificate in a base-64 encoded
	PKCS-7 data structure. With current IIS releases, this must be pre-processed
	prior to installing the SGC server Certificate using IIS Key Manager.
	
	The program Sgcinst.exe performs the required pre-processing. It accepts a
	base-64 encoded PKCS-7 data structure, installs the intermediate CA Certificate,
	and creates a base-64 encoded x.509v3 Certificate file containing only the SGC
	server Certificate. This output file may then be loaded for IIS using Key
	Manager.
	
	The process for installing an SGC server Certificate from Verisign, or other CA
	returning a PKCS-7 Certificate chain, is as follows:
	
	1. Retrieve the PKCS-7 Certificate chain from the CA and save it to a temporary
	  folder on the IIS computer. It is recommended this be saved with a .pk7
	  extension.
	
	2. Run the Sgcinst.exe program with the PKCS-7 Certificate chain file as the
	  inputfile and a filename to hold the base-64 encoded x.509v3 SGC server
	  Certificate as the outputfile.
	
	  To do this, open a Command Prompt window on the Windows NT server computer, go
	  to the folder containing the Certificate files, and then enter the following
	  command:
	
	     sgcinst inputfile -i -o outputfile
	
	  where:
	
	     inputfile  = file containing the base-64 encoded PKCS-7 Certificate
	                  chain
	     outputfile = file which will hold the base-64 encoded x.509v3 SGC
	                  server Certificate
	
	  If the CA Certificate chain had been saved to a file named Sgccert.pk7, then
	  the SGCINST command would be:
	
	     sgcinst sgccert.pk7 -i -o sgccert.cer
	
	  If the inputfile is not a properly formatted base-64 encoded PKCS-7, the
	  program will return the following error message:
	
	  Error in reading input file: inputfile
	
	3. Install the base-64 encoded x.509v3 SGC server Certificate using the IIS Key
	  Manager. See your IIS documentation if you need assistance with this
	  operation.
	
	For more information on the Server Gated Cryptography (SGC), please go to the
	following Microsoft web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnmag00/html/websecureside.asp
	
	Additional query words: schannel.dll crypto
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
