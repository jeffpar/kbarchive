---
layout: page
title: "Q113058: Using Interrupt 21h, Function 3Fh to Read the Keyboard"
permalink: kb/113/Q113058/
---

## Q113058: Using Interrupt 21h, Function 3Fh to Read the Keyboard

	Article: Q113058
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "MS-DOS Programmer's Reference" (published by Microsoft Press) versions 5
	and 6, as well as other MS-DOS programming reference books, state that Interrupt
	21h, Function 0Ah (Buffer Keyboard Input) has been superseded by Function 3Fh
	(Read File or Device). Function 3Fh is more general purpose and easier to use
	for some programming tasks, but may cause some apparently unusual behavior when
	used to read from device 0 (stdin--the console or keyboard).
	
	Function 3Fh uses a system buffer when reading from a device and then transfers
	the desired number of characters into a memory buffer specified by the calling
	program. The buffer used by Function 3Fh is not the same as that used by MS-DOS
	or by other functions that read from the keyboard (Functions 01h, 06h, 07h, 08h,
	0Ah, and 0Ch). Function 3Fh moves characters from the input buffer to the
	program supplied data area either until the requested number of characters have
	been read or, if reading from the keyboard, until a carriage return is reached.
	When more characters than requested are entered from the keyboard, the requested
	number are returned to the program, but the input buffer is not flushed. This
	may cause subsequent read operations to return with invalid or undesired data.
	This can even occur between separate instances of program execution.
	
	The sample shown below illustrates this, and shows how to clear the buffer by
	reading until a linefeed character has been found.
	
	MORE INFORMATION
	================
	
	The sample prompts for input, reads up to 10 characters, and displays the
	characters read. If more than 10 characters are entered, only the first 10 will
	be displayed. If the program is then executed a second time, the remaining
	characters (or the next 10, whichever is less) will be immediately displayed.
	The prompt will be given but the program will not wait for input.
	
	If the commented lines following the label clearbuf are added into the program,
	the input buffer will be cleared and the program will work as expected. Note
	that the code to clear the buffer reads until it finds a linefeed character
	(0Ah) rather than a carriage return (0Dh). Experimentation shows that if the
	linefeed is left in the buffer, the program will wait for another carriage
	return after running the loop, and will not read any data the next time it is
	run. Function 3Fh does not return the carriage return/linefeed (CR/LF) pair to
	the calling program when reading multiple bytes, but does return them when
	reading 1 byte at a time, and therefore both must be cleared as shown.
	
	Also note that possible read and write errors are being ignored by this code.
	Refer to "MS-DOS Programmer's Reference" for information on possible errors and
	how to detect them.
	
	The "MS-DOS Programmer's Reference" is available through Microsoft Press by
	calling 1-(800)-MSPRESS.
	
	REFERENCES
	==========
	
	"MS-DOS Programmer's Reference," Version 5, Microsoft Press, 1991. Page 282.
	
	"MS-DOS Programmer's Reference," Version 6, Microsoft Press, 1993. Pages 278-9.
	
	Sample Code
	-----------
	
	  ; Assemble options needed:  none
	  .MODEL SMALL,C
	  .STACK
	  .DATA
	      mybuf BYTE 10 DUP (' ')
	      pstring BYTE 0Dh,0Ah,"enter data: "
	      ostring BYTE 0Dh,0Ah,"data entered: "
	
	      abyte BYTE ?
	  .CODE
	      .STARTUP
	      ; prompt user
	      mov bx, 1  ; stdout
	      mov cx, LENGTHOF pstring
	      mov dx, SEG pstring
	      mov ds, dx
	      mov dx, OFFSET pstring
	      mov ah, 40h
	      INT 21h
	          ; ignore possible errors
	
	      ; read data
	      mov bx, 0  ; stdin
	      mov cx, LENGTHOF mybuf
	      mov dx, SEG mybuf
	      mov ds, dx
	      mov dx, OFFSET mybuf
	      mov ah, 3Fh
	      INT 21h
	          ; ignore possible errors
	
	      mov bx, 1  ; stdout
	      mov cx, LENGTHOF ostring
	      mov dx, SEG ostring
	      mov ds, dx
	      mov dx, OFFSET ostring
	      mov ah, 40h
	      INT 21h
	          ; ignore possible errors
	
	      mov bx, 1  ; stdout
	      mov cx, LENGTHOF mybuf
	      mov dx, SEG mybuf
	      mov ds, dx
	      mov dx, OFFSET mybuf
	      mov ah, 40h
	      INT 21h
	          ; ignore possible errors
	
	      ; clear buffer
	
	      mov bx, 0  ; stdin
	      mov cx, 1
	      mov dx, SEG abyte
	      mov ds, dx
	      mov dx, OFFSET abyte
	      mov ah, 3Fh
	      INT 21h
	      mov al, abyte
	      cmp al, 0Ah
	      jne clearbuf
	
	      .EXIT
	  END
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b 6.10 6.10a masm assembly assembler DOS int
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
