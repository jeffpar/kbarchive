---
layout: page
title: "Q104570: Reading and Writing Icons from ExtractIcon"
permalink: /kb/104/Q104570/
---

## Q104570: Reading and Writing Icons from ExtractIcon

{% raw %}

	Article: Q104570
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is specifically about device dependent icons. The ExtractIcon()
	function does not save the contents of the icon to a file. The programmer needs
	to implement this in his or her application. Below are code samples that allow
	you to read and write the data to a file so that DrawIcon() can be used.
	
	MORE INFORMATION
	================
	
	The following is a summary of the steps needed to save the hIcon to a file:
	
	1. Get the desired handle to the icon by using ExtractIcon().
	
	2. Find the size of the global memory by using GlobalSize().
	
	3. Lock the handle of the icon using GlobalLock().
	
	4. Open a new file by using OpenFile().
	
	5. Write the contents out to the file by using _lwrite().
	
	6. Close the file.
	
	  // -----------------------------------------------
	  //   Parameters: hIcon - passed in
	  //   Returns:    TRUE on success, FALSE on failure
	  // -----------------------------------------------
	  int NEAR _pascal SaveMyIcon( HICON hIcon)
	  {
	    int       fh, i, iResult;
	    UINT      uiSize;
	    DWORD     dwSize;
	    OFSTRUCT  of;
	
	      if (!hIcon)
	        return FALSE;
	
	      dwSize  = GlobalSize(hIcon);
	      lpGMem  = GlobalLock(hIcon);
	      fh = OpenFile ("myicon.bin", &of, OF_WRITE | OF_CREATE);
	
	      if (fh == -1)  // If NOT opened successfully.
	      {
	       MessageBox(NULL, "Unable to create file", NULL, MB_OK );
	       return FALSE;
	      }
	
	      uiSize = _lwrite(fh, (LPSTR)lpGMem, (UINT)dwSize);
	      _lclose(fh);
	
	      if (uiSize == -1 || uiSize < (UINT)dwSize)
	      {
	         MessageBox(NULL, "Unable to read file", NULL, MB_OK );
	         return FALSE;
	      }
	      else // Everything worked, return hGMem.
	      {
	        return (HICON)hGMem;
	      }
	  }
	
	The following is a summary of the steps needed to read the hIcon from a file:
	
	1. Open the file with OpenFile.
	
	2. Get the size of the file with _fstat.
	
	3. Make a chunk of memory, hMem, for the file by using GlobalAlloc.
	
	4. Lock the memory by using GlobalLock.
	
	5. Read the file into memory by using _lread.
	
	6. Close the file by using _lclose.
	
	7. Unlock the memory by using GlobalUnlock.
	
	8. Pass the hMem to DrawIcon.
	
	  // --------------------------------------
	  // Read in the binary icon data from disk
	  // --------------------------------------
	  HICON NEAR _pascal LoadMyIcon()
	  {
	    int       iResult, fh;
	    UINT      nBytesRead;
	    struct    _stat   buf;
	    OFSTRUCT  ofFileInfo;
	
	    nBytesRead = 0;
	    if ( OpenFile((LPSTR)"myicon.bin",(LPOFSTRUCT)&ofFileInfo,OF_EXIST) != -1
	  )
	    {
	      // Open the file. Its existence has already been checked.
	      fh = _lopen("myicon.bin", OF_READ);
	      if (fh == -1)  // if NOT opened successfully
	        return FALSE;
	
	      // File the file structure to get the file size.
	      iResult = _fstat(fh, &buf);
	      if ( !iResult)
	      {
	        hGMem = GlobalAlloc(GHND, (DWORD)buf.st_size);
	        if (0==hGMem)
	        {
	          _lclose(fh);
	          return(FALSE);
	        }
	
	        // Lock the memory.
	        if (!(lpGMem = GlobalLock(hGMem)))
	        {
	          GlobalFree(hGMem);
	          _lclose(fh);
	          return(FALSE);
	        }
	
	        // Seek to the beginning of the file.
	        _llseek(fh, 0, 0);
	        nBytesRead = _lread(fh, (LPSTR)lpGMem, buf.st_size );
	      }
	      _lclose(fh);
	
	      if (nBytesRead == -1 || nBytesRead < buf.st_size)
	      {
	        MessageBox(NULL, "Unable to read file", NULL, MB_OK );
	        return FALSE;
	      }
	      else // Everything worked, return hGMem.
	      {
	        return (HICON)hGMem;
	      }
	    }
	    else
	    {
	      MessageBox( NULL, "File not found", NULL, MB_OK );
	      return FALSE;
	    }
	  }
	
	WARNING: This will work correctly until the user changes his or her
	display-driver type to a different resolution, or from mono to color, or from
	color to mono.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
