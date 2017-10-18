---
layout: page
title: "Q201255: HOW TO: Enable SGC on Internet Information Server"
permalink: kb/201/Q201255/
---

## Q201255: HOW TO: Enable SGC on Internet Information Server

	Article: Q201255
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Install Schannel.dll and Sgcinst.exe
	- Enable Server Gated Cryptography
	- Request an SGC Certificate
	- Install the SGC Certificate
	
	   - IIS 3.0
	- IIS 4.0
	- IIS 5.0
	
	- Notes
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article describes how to enable Server Gated Cryptography (SGC) on a
	computer that is running Internet Information Server (IIS).
	
	NOTE: Microsoft Internet Information Server (IIS) version 4.0 and Microsoft
	Internet Information Services (IIS) version 5.0 require no special
	modifications. You must only request an SGC certificate for SGC to be functional
	with IIS version 4.0 and IIS version 5.0. See the Request an SGC Certificate
	section for more information.
	
	Install Schannel.dll and Sgcinst.exe
	------------------------------------
	
	1. Install the following two executable files:
	
	   - Schannel.dll
	
	   - Sgcinst.exe
	
	These files are contained in the self-extracting Sgcschannel.exe file. To access
	this file, visit the following Microsoft Web site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/misc/sgcschannel/
	
	Copy Sgcschannel.exe in a temporary directory on your Windows NT server. Running
	this file unpacks the following files:
	
	   - Schannel.dll
	
	   - Sgcinst.exe
	
	   - License.txt
	
	   - Readme.txt
	
	2. Install this version of Schannel.dll in the <%windir%>\system32
	  directory, where <%windir%> is your Windows installation directory.
	  Typically, this is C:\Winnt. Note that Schannel.dll already exists in this
	  directory. This DLL is loaded at boot time and may not be copied over. To
	  install the SGC Schannel.dll file, you must first rename the existing
	  Schannel.dll file. You can do this from a command prompt or by using Windows
	  Explorer. Microsoft recommends that you rename it to Schannel.sp3 so that it
	  is available if you decide to remove the SGC capability later. After you do
	  this, copy the SGC Schannel.dll file to the <%windir%>\system32
	  directory.
	
	3. Copy Sgcinst.exe to a working directory. This can be put in any location;
	  however, Microsoft recommends that you copy it to <%windir%>\system32,
	  so that it will be in your standard path for executable programs. The
	  application is a utility to help in installing SGC certificates in existing
	  versions of IIS.
	
	Enable Server Gated Cryptography
	--------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: You do not have to add the EnableSGC DWORD value in Microsoft Internet
	Information Server (IIS) version 4.0 from the NT Option Pack or Microsoft
	Internet Information Services (IIS) version 5.0 that is included with Windows
	2000. In IIS versions 4.0 and 5.0, 1024-bit certificates are supported
	natively.
	
	1. Click Start, and then click Run.
	
	2. Type "Regedt32" (without the quotation marks), and then click OK.
	
	3. In Registry Editor, expand HKEY_LOCAL_MACHINE, and then locate the following
	  subkey:
	
	  System\CurrentControlSet\Control\SecurityProviders
	
	4. Click to select SCHANNEL.
	
	5. On the Edit menu, click New, and then click DWORD Value. A new value appears
	  in the right pane.
	
	6. Type "EnableSGC" (without the quotation marks), and then press ENTER.
	
	7. Right-click EnableSGC, and then click Modify.
	
	8. In the Edit DWord Value dialog box, type "1" (without the quotation marks),
	  and then click OK.
	
	9. Click Registry, and then click Exit to close Registry Editor.
	
	10. Restart the computer.
	
	Request an SGC Certificate
	--------------------------
	
	An SGC certificate can be requested by using the process that is described in the
	IIS Key Manager documentation. Generating a request for an SGC certificate is no
	different from the process for requesting a standard server identification
	certificate. Note that the keys that are associated with SGC certificates must
	be 1024 bits in length.
	
	NOTE: You must also provide any additional information that is requested by the
	certification authority to validate your application.
	
	Install the SGC Certificate
	---------------------------
	
	The procedure to install the SGC certificat is different for IIS 3.0, IIS 4.0,
	and IIS 5.0.
	
	IIS 3.0:
	
	Installing an SGC certificate with IIS 3.0 is a two-step process.
	
	VeriSign and other certification authorities that currently issue server
	identification certificates return the server certificate as a base-64 encoded
	x.509v3 certificate.
	
	To more effectively control issuance of the SGC certificates, VeriSign has
	created an intermediate, or issuing, certification authority for SGC
	certificates. This requires that a certificate chain be returned to the IIS
	computer. This chain includes both the SGC server certificate and the
	intermediate certification authority certificate in a base-64 encoded PKCS-7
	data structure. With current IIS releases, this must be preprocessed before you
	install the SGC server certificate by using IIS Key Manager.
	
	Sgcinst.exe performs the required preprocessing. It accepts a base-64 encoded
	PKCS-7 data structure, installs the intermediate certification authority
	certificate, and creates a base-64 encoded x.509v3 certificate file that
	contains only the SGC server certificate. This output file may then be loaded
	for IIS by using Key Manager.
	
	To install a base-64 encoded PKCS-7 data structure from VeriSign or another
	certification authority that returns a PKCS-7 certificate chain, follow these
	steps:
	
	1. Retrieve the PKCS-7 certificate from the certification authority and save it
	  to a temporary directory on the IIS computer. Microsoft recommends that you
	  save this file with a .pk7 file name extension.
	
	2. Run Sgcinst.exe with the PKCS-7 certificate chain file as the input file and
	  a file name to hold the base-64 encoded x.509v3 SGC server certificate as the
	  output file.
	
	  To do this, open a command prompt window on the Windows NT Server computer,
	  locate the directory that contains the certificate files, and then type the
	  following command, where <input file> is the file that contains the
	  base-64 encoded PKCS-7 certificate chain (that is, the file that is received
	  from the certification authority) and <output file> is the file that
	  will hold the base-64 encoded x.509v3 SGC server certificate:
	
	  sgcinst <input file><output file>
	
	If the certification authority certificate chain is saved to a file named
	Sgccert.pk7, the Sgcinst command is as follows:
	
	  sgcinst sgccert.pk7 sgccert.cer
	
	NOTE: If the input file is not a properly-formatted base-64 encoded PKCS-7, you
	receive the following error message:
	
	  Error in reading input file: <inputfilename>
	
	3. Install the output file by using IIS Key Manager. See your IIS documentation
	  if you need help with this operation.
	
	IIS 4.0:
	
	For additional information about how to install a certificate on IIS 4.0, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q234271 INFO: Installing a VeriSign SGC Certificate on IIS 4.0
	
	IIS 5.0:
	
	For more information about how to install a certificate on IIS 5.0, see the
	"Installing the Certificate and Setting Up an SSL Web Site" section of the
	following Microsoft Knowledge Base article:
	
	  Q290625 HOWTO: Configure SSL in a Windows 2000 IIS 5.0 Test Environment Using
	  Certificate Server 2.0
	
	Notes
	-----
	
	It is critical that the input file to the Sgcinst program is properly formatted.
	A properly-formatted input file contains only ASCII printable characters
	(base-64 encoding ensures this). The following is an example of a correct input
	file:
	
	  -----BEGIN CERTIFICATE-----
	  MIIFHjCCBIegAwIBAgIQTvLRLEwlvniwCz0g3ZENcDANBgkqhkiG9w0BAQQFADCB
	  .
	  .
	  .
	  PU/rJbU8kEvm1tCZXJIHQem6
	  -----END CERTIFICATE-----
	
	where the period (.) characters indicate multiple lines that are similar to the
	second line. Additional lines of text can come before the line that contains the
	text "BEGIN CERTIFICATE". For example, an e-mail header that comes before the
	certificate data does not cause a problem. If you manually save the certificate
	chain that is returned by the certification authority, make sure to include the
	lines that contain "BEGIN CERTIFCATE" and "END CERTIFICATE", as indicated.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q164627 SGC-Enabled Clients Have Trouble Connecting to SGC-Enabled IIS
	
	  Q194889 Sgcinst.exe is Available for Download
	
	  Q234271 INFO: Installing a VeriSign SGC Certificate on IIS 4.0
	
	  Q299525 HOWTO: Set Up SSL Using IIS 5.0 and Certificate Server 2.0
	
	  Q290625 HOWTO: Configure SSL in a Windows 2000 IIS 5.0 Test Environment Using
	  Certificate Server 2.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
