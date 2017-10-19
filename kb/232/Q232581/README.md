---
layout: page
title: "Q232581: BUG: GetMetaFile() Fails on Long File Names"
permalink: /kb/232/Q232581/
---

## Q232581: BUG: GetMetaFile() Fails on Long File Names

	Article: Q232581
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGDI kbMetafile kbSDKWin32 kbOSWin95bug kbOSWin98bug kbGrpDSGDI
	Last Modified: 20-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GetMetaFile() API, used to load a disk-based Windows metafile into memory,
	returns failure code when passed a long file name.
	
	RESOLUTION
	==========
	
	To work around this problem, use the metafile's short file name in the call to
	GetMetaFile(). Code similar to the following should work properly:
	
	  HMETAFILE MyGetMetaFile( LPTSTR szFileName )
	  {
	  	HMETAFILE	hWMF;
	  	TCHAR		szTemp[MAX_PATH];
	
	  	if( (hWMF=GetMetaFile(szFileName)) != NULL )
	  		return hWMF;
	  	if( GetShortPathName( szFileName, szTemp, MAX_PATH ) == 0 )
	  		return NULL;
	  	return GetMetaFile( szTemp );
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGDI kbMetafile kbSDKWin32 kbOSWin95bug kbOSWin98bug kbGrpDSGDI 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
