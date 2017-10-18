---
layout: page
title: "Q247389: IIS: How to Disable Caching of Specific MIME Types"
permalink: kb/247/Q247389/
---

## Q247389: IIS: How to Disable Caching of Specific MIME Types

	Article: Q247389
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Web administrators may need to periodically disable the caching of content that
	changes frequently. This article describes a method to disable caching of
	document types.
	
	MORE INFORMATION
	================
	
	MIME stands for "Multipurpose Internet Mail Extensions," which refers to a way
	of configuring browsers or mail clients to view files that are in multiple
	formats based on a "MIME type." "MIME mapping" is a process by which Internet
	Information Server (IIS) "maps" files by their extensions to a particular MIME
	type. For example, a file with the extension .htm has a MIME type of
	"text/html", whereas a file with the extension .gif has a MIME Type of
	"image/gif".
	
	When a request is made by a client for a particular file, IIS uses the MIME map
	to determine the correct MIME type to tell a client it will be receiving. IIS
	contains a large list of default MIME types to use and will return a MIME type
	of "application/octet-stream" for any file extension that is not explicitly
	mapped.
	
	Cache Disabling Techniques:
	
	- The easiest way to disable caching of a given MIME type is to create folders
	  based on the types to disable and then set custom headers for those folders.
	  For example, the following steps will disable caching of files in an images
	  folder:
	
	  1. Create a folder under your Wwwroot folder named "Images" (without the
	     quotation marks).
	
	  2. Open the Internet Services Manager (ISM).
	
	  3. Locate the Images folder under your default Web site.
	
	  4. Right-click the Images folder and select Properties.
	
	  5. Select the HTTP Headers tab.
	
	  6. Click Add in the Custom HTTP Headers section.
	
	  7. Add a header named "Cache-Control" (without the quotation marks) with a
	     value of no-cache.
	
	  8. Click ok to apply the changes.
	
	  When creating content, any files stored in this folder will no longer be
	  cached. This is especially useful when working with images that are
	  frequently updated.
	
	- The following steps describe an unsupported method of tricking IIS using
	  Windows Scripting Host (WSH) and Active Directory Service Interfaces (ADSI)
	  into returning a "no-cache" header for a specific MIME type, in this case
	  .gif files, for an entire Web server by modifying the IIS metabase.
	
	  Microsoft provides programming examples for illustration only, without
	  warranty either expressed or implied, including, but not limited to, the
	  implied warranties of merchantability and/or fitness for a particular
	  purpose. This article assumes that you are familiar with the programming
	  language being demonstrated and the tools used to create and debug
	  procedures. Microsoft support professionals can help explain the
	  functionality of a particular procedure, but they will not modify these
	  examples to provide added functionality or construct procedures to meet your
	  specific needs. If you have limited programming experience, you may want to
	  contact a Microsoft Certified Partner or the Microsoft fee-based consulting
	  line at (800) 936-5200. For more information about Microsoft Certified
	  Partners, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	  For more information about the support options that are available and about
	  how to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	  1. Save the following WSH code in your %SystemDrive%\InetPub\AdminScripts
	     folder as "MimeChange.vbs" (without the quotation marks):
	
	  Option Explicit
	
	  Dim boolFound
	  Dim intCount
	  Dim intMimeMap
	  Dim objMimeMap
	  Dim varMimeMap
	  Dim varMimeExt
	  Dim varMimeTyp
	
	  ' specify the extension and MIME type to work with
	  varMimeExt = ".gif"
	  ' NOTE - this entry stores an extra HTTP header with the MIME information
	  ' this "tricks" IIS into sending the extra cache control header
	  varMimeTyp = "image/gif" & vbCrLf & "Cache-Control: no-cache"
	
	  ' create the ADSI object & current MIME map at that path
	  Set objMimeMap = GetObject("IIS://localhost/w3svc")
	  varMimeMap = objMimeMap.GetEx("MimeMap")
	
	  ' get the MIME map count & set search status to false
	  intCount = UBound(varMimeMap) + 1
	  boolFound = False
	
	  ' loop through MIME map searching for existing extension information
	  For intMimeMap = 0 to intCount - 1
	    If varMimeMap(intMimeMap).Extension = varMimeExt Then
	      boolFound = True
	      Exit For
	    End If
	  Next
	
	  ' if no extension information is found, create the new mapping
	  If boolFound = False Then
	    intMimeMap = intCount
	    ReDim Preserve varMimeMap(intMimeMap)
	    Set varMimeMap(intMimeMap) = CreateObject("MimeMap")
	    varMimeMap(intMimeMap).Extension = varMimeExt
	  End If
	
	  ' store the new information in the MIME map
	  varMimeMap(intMimeMap).MimeType = varMimeTyp
	  objMimeMap.PutEx 2,"MimeMap",varMimeMap
	  objMimeMap.SetInfo
	
	  2. Execute the following command to modify the metabase:
	
	  "CSCRIPT %SystemDrive%\InetPub\AdminScripts\MimeChange.vbs" (without the
	  quotation marks)
	
	  Future requests for .gif files will now returned with the desired "no-cache"
	  header.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
