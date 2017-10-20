---
layout: page
title: "Q250344: SAMPLE: ARRAYCONVERT.EXE Variant Conversion Functions"
permalink: /kb/250/Q250344/
---

## Q250344: SAMPLE: ARRAYCONVERT.EXE Variant Conversion Functions

{% raw %}

	Article: Q250344
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsample kbVBp kbVBp400 kbVBp500 kbVBp600 kbDSupport
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ArrayConvert.exe is a sample that is used to convert Variants of one type to
	Variants of another type. For example, if you are using Visual Basic Script
	(VBScript), these conversion functions aid you in converting a Variant that
	contains an Octet string to a Variant that contains a Hex string.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ArrayConvert.exe
	  (http://download.microsoft.com/download/exch55/sample/55/win98/en-us/ArrayConvert.exe)
	
	The ArrayConvert.exe file contains the following files:
	
	+-------------------------------------+
	| ADS.vbp              | 747 bytes    | 
	+-------------------------------------+
	| ADS.vbw              | 35 bytes     | 
	+-------------------------------------+
	| ArrayConvert.cls     | 3017 bytes   | 
	+-------------------------------------+
	| ArrayConvertTest.bas | 1205 bytes   | 
	+-------------------------------------+
	| ArrayConvertTest.vbg | 67 bytes     | 
	+-------------------------------------+
	| ArrayConvertTest.vbp | 884 bytes    | 
	+-------------------------------------+
	| ArrayConvertTest.vbw | 31 bytes     | 
	+-------------------------------------+
	| ADS.dll              | 24,576 bytes | 
	+-------------------------------------+
	| ADs.exp              | 996 bytes    | 
	+-------------------------------------+
	| ADs.lib              | 2536 bytes   | 
	+-------------------------------------+
	| AdsConvert.vbg       | 73 bytes     | 
	+-------------------------------------+
	
	Release Date: Apr-13-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The five functions that are in this sample are:
	
	1. CStrArray - Use this function to convert a Variant Array of strings to a
	  Variant Array of Variants containing strings. This allows VBScript to access
	  multi-valued string attributes returned in ADO recordsets.
	
	2. CvOctetStr2vHexStr - Use this function to convert a Variant Array of bytes to
	  a Variant containing an ASCII-encoded Hex string. This allows VBScript to
	  translate an ADSTYPE_OCTETSTRING Variant into a string of ASCII characters
	  0-9 A-F.
	
	3. CvHexStr2vOctetStr -Use this function to convert a Variant containing an
	  ASCII-encoded Hex string to a Variant Array of bytes. This allows VBScript to
	  create Variants for ADSTYPE_OCTETSTRING from strings of ASCII characters 0-9
	  A-F.
	
	4. CvOctetStr2vStr - Use this function to convert a Variant Array of bytes to a
	  Variant containing an ASCII string. This allows VBScript to translate an
	  ADSTYPE_OCTETSTRING Variant into a string of ASCII characters.
	
	5. CvStr2vOctetStr - Use this function to convert a Variant containing a string
	  to a Variant Array of bytes. This allows VBScript to create Variants for
	  ADSTYPE_OCTETSTRING from strings of ASCII characters.
	
	To use the sample, double-click on the self-extracting executable file
	ArrayConvert.exe. Using Visual Basic, open the ArrayConvertTest.vbg file. Once
	the project is open you can run the test program that demonstrates how to use
	the conversion functions.
	
	To use the functions from VBScript, you can register the the Ads.Dll file by
	doing Regsvr32 Ads.dll and then calling the functions from VBScript.
	
	The following is an example of using the CStrArray function in a VBScript to
	convert and display the members of Distribution lists in an Exchange
	Organization:
	
	   
	  Set cnvt = CreateObject("ADs.ArrayConvert")
	  Set conn = CreateObject("ADODB.connection")
	  conn.provider = "ADSDSOObject"
	  conn.open ""
	  Set rs = conn.execute( _
	      "<LDAP://Server/o=organization/ou=site/cn=recipients>;(objectClass=groupOfNames);ADsPath,member;onelevel")
	         
	  While Not rs.EOF
	      v1 = cnvt.CStrArray(rs.fields("member").Value)
	      For Each v2 In v1
	  	msgbox v2
	      Next
	
	      rs.movenext
	  Wend
	
	Additional query words: ArrayConvert Array Convert
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbVBp kbVBp400 kbVBp500 kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
